const db = require('../../models/')

const adminController =()=> {  

  const createRoles = async (req, res, next) => {
    console.log("creating roles")
    try {
      await db.Role.bulkCreate([
        { role_name: 'owner', role_description: 'Full control over the system.' },
        { role_name: 'admin', role_description: 'Can manage most resources.' },
        { role_name: 'employee', role_description: 'Limited control based on job functions.' },
        { role_name: 'client', role_description: 'Access to personal data and ordering.' }
      ]);
      
      res.json({message: "Role success"})
    } catch (error) {
      next(error)
    }
  };

  const createPermissions = async (req, res, next) => {

    try {
      const permissions = [
        { permission_name: 'read', permission_description: 'Can read resources.' },
        { permission_name: 'write', permission_description: 'Can create and update resources.' },
        { permission_name: 'delete', permission_description: 'Can delete resources.' },
        // ... additional permissions as needed
      ];
      
      // await db.Permission.bulkCreate(permissions);
      await db.Permission.Create(permissions);
      res.json({message: "Permission success"})

    } catch (error) {
      console.error("Permission ",error);
      next(error)
    }
  };

  return {
    createRoles,
    createPermissions
  }
}

module.exports = adminController
