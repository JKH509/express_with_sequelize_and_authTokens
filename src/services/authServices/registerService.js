const CustomError = require("../../errors/customErrors");
const sequelize = require('../../../config/sequelize');
const validator = require('validator');

const bcrypt = require("bcrypt"); // Assuming you are using 'bcrypt'
const db = require("../../models");
let Business = db.Business;
let User = db.User;

const validInput = /^[a-zA-Z0-9\s']+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const DEFAULT_ROLE = process.env.DEFAULT_ROLE


const handleRegisterBusinessService = async (business, user) => {
  const isValidInput = (input) => {
    return validInput.test(input);
  };

  user.userEmail = validator.escape(user.userEmail);
  business.businessName = validator.escape(business.businessName);

  if (!isValidInput(business.businessName)) {
    throw {
      message: 'Business name cannot include special characters.',
      status: 400
    };
  } 

  if(!business.businessName){
    throw {
      message: 'Business name is required.',
      status: 400
    };  
  }
  if(!user.userName){
    throw {
      message: 'User name is required.',
      status: 400
    };  
  }
  if(!user.userEmail){
    throw {
      message: 'Email is required.',
      status: 400
    };  
  }

  if(!user.userPassword){
    throw {
      message: 'Password is required.',
      status: 400
    };  
  }

  if (!business.businessName || !user.userName || !user.userEmail || !user.userPassword) {
    throw {
      message: 'All fields are required.',
      status: 400
    };
  }

  if (!validator.isEmail(user.userEmail)) {
    throw {
      message: 'Invalid email format.',
      status: 400
    };
  }


const ownerRole = await db.Role.findOne({ where: { role_name: 'owner' } });
const allPermissions = await db.Permission.findAll();
await ownerRole.setPermissions(allPermissions);


    try {

      await sequelize.transaction(async (t) => {
        const existingBusiness = await Business.findOne({
          where: { business_name: business.businessName }
        });
  
        if (existingBusiness) {
          const existingUser = await User.findOne({
            where: { user_email: user.userEmail, business_id: existingBusiness.business_id }
          });
  
          if (existingUser) {
            throw {
              message: 'Business name and email combination already exists.',
              status: 409
            };
          }
        }

        const ownerRole = await db.Role.findOne({ where: { role_name: 'owner' } }, { transaction: t });
        if (!ownerRole) {
          throw new CustomError('Owner role not found', 500);
        }
        const allPermissions = await db.Permission.findAll({ transaction: t });
        if (allPermissions.length === 0) {
          throw new CustomError('No permissions found', 500);
        }
    
        try {
          await ownerRole.setPermissions(allPermissions, { transaction: t });
        } catch (err) {
          throw new CustomError('Failed to set permissions for owner role', 500);
        }
  

        const saltRounds = 10;
        user.userPassword = await bcrypt.hash(user.userPassword, saltRounds);
  
        const newBusiness = await Business.create({
          business_name: business.businessName,
        }, { transaction: t }); 

        import('chalk').then((chalk) => {
          console.log(chalk.default.greenBright.bgWhite("newBusiness "), newBusiness.get())
          console.log(chalk.default.greenBright.bgWhite("newBusiness "), newBusiness.business_id)
      });
         
        const newUser = await User.create({
          user_name: user.userName,
          user_email: user.userEmail,
          user_password: user.userPassword,
          business_id: newBusiness.business_id,
          role_id: ownerRole.role_id,
        }, { transaction: t }); 
  
        import('chalk').then((chalk) => {
          console.log(chalk.default.blue.bgWhite("Business Created "), newBusiness.business_name)
          console.log(chalk.default.blue.bgWhite("With the user "), newUser.user_name)
      });
      }); 
      return { 'success': `New Business ${business.businessName} created!` };
    } catch (error) {
      import('chalk').then((chalk) => {
        console.error(chalk.default.red.bgWhite("handleRegisterBusinessService error "), error)
    });
      return {
        message: error.message || 'An unexpected error occurred while creating the business.',
        status: error.status || 500
      };
    }
  }

module.exports = { handleRegisterBusinessService };

// await sequelize.transaction(async (t) => {
//   const business = await Business.create({ /* business data */ }, { transaction: t });

//   const user = await User.create({ /* user data, including business_id */ }, { transaction: t });

//   // Find or create the role and permission
//   const role = await Role.findByPk(role_id, { transaction: t });
//   const permission = await Permission.findByPk(permission_id, { transaction: t });

//   // Assign the role and permission to the user
//   await user.addRole(role, { transaction: t });
//   await user.addPermission(permission, { transaction: t });
// });

