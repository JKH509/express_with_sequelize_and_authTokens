const express = require("express");
const businessController = require("../controllers/businessController");
const businessRouter = express.Router();


function router() {

  const { handleRegisterBusiness } = businessController();

  businessRouter.route('/register_business').post(handleRegisterBusiness);

  return businessRouter;
};


module.exports = router;