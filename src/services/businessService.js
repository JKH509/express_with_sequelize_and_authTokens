const CustomError = require("../../errors/customErrors");
const db = require("../../models");
const bcrypt = require("bcrypt"); // Assuming you are using 'bcrypt'
const business = require("../models");


const createNewBusiness = async (bizname,  email, pwd) => {
    console.log("handleRegisterService ", username, ' -? '. pwd )

  if (!username || !pwd) {
    throw new CustomError("Username and password are required.", 400, {
      input: "missingFields",
    });
  }

  // Check for duplicate usernames in the db
  const duplicate = await User.findOne({
    where: {
      user_name: username,
    },
  });

  if (duplicate) {
    throw new CustomError("Username already exists.", 409, {
      input: "duplicateUsername",
    });
  }

  console.log("PWD ", pwd)
  const hashedPwd = await bcrypt.hash(pwd,  10);

  const newUser = await User.create({
    user_name: username,
    user_email: email,
    user_password: hashedPwd,
    user_business_id:1
  });

  return newUser;
};
module.exports = { createNewBusiness };

// module.exports =  handleRegister

