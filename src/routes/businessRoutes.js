const express = require("express");
const businessController = require("../controllers/businessController");
const businessRouter = express.Router();


function router() {

  let {  
    handleRegisterBusiness
  } = businessController();

  businessRouter.route('/register_business').post(handleRegisterBusiness);
  // businessRouter.route('/auth').post(handleLogin);
  // businessRouter.route('/refresh-token').post(handleRefreshToken);
  // businessRouter.route('/logout').get(handleLogout);


  return businessRouter;
};


module.exports = router;