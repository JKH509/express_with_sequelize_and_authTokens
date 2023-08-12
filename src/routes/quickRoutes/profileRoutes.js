const express = require("express");
const profileControllers = require("../../controllers/quickControllers/profileControllers");

const profileRouter = express.Router();


function router() {

  const { createProfile } = profileControllers();

     // profileRouter.route('/all_profiles').get(createUser);
     profileRouter.route('/create_profile').post(createProfile);
     // profileRouter.route('/update').put(createUser);
     // profileRouter.route('/get_by_post/:id').get(createUser);
     // profileRouter.route('/get_by_id/:id').get(createUser);
     // profileRouter.route('/delete/:id').delete(createUser);

  return profileRouter;
};


module.exports = router;