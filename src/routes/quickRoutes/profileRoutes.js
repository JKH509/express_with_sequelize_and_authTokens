const express = require("express");
const profileControllers = require("../../controllers/quickControllers/profileControllers");

const profileRouter = express.Router();


function router() {

  const { getAllProfile, createProfile, profileById, updateProfile, deleteProfile } = profileControllers();

  profileRouter.route('/all_profiles').get(getAllProfile);
  profileRouter.route('/create_profile').post(createProfile);
  profileRouter.route('/get_profile_by/:id').get(profileById);
  profileRouter.route('/update_profile/:id').put(updateProfile);
  profileRouter.route('/delete_profile/:id').delete(deleteProfile);

  return profileRouter;
};


module.exports = router;