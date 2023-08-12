const express = require("express");
const adminController = require("../controllers/adminControllers/adminControllers");
const adminRouter = express.Router();

function router() {

  let {  
    createRoles,
    createPermissions,
  } = adminController();

  adminRouter.route('/create_role').post(createRoles);
  adminRouter.route('/create_permission').post(createPermissions);
  // authRouter.route('/refresh-token').post(handleRefreshToken);
  // authRouter.route('/logout').get(handleLogout);

  return adminRouter;
};


module.exports = router;