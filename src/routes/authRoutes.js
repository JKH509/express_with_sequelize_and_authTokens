const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();


function router() {

  let {  
    handleRegister,
    handleLogin,
    handleRefreshToken,
    handleLogout
  } = authController();

  authRouter.route('/register').post(handleRegister);
  authRouter.route('/auth').post(handleLogin);
  authRouter.route('/refresh-token').post(handleRefreshToken);
  authRouter.route('/logout').get(handleLogout);


  return authRouter;
};


module.exports = router;