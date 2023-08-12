const express = require("express");
const userControllers = require("../../controllers/quickControllers/userControllers");
const userRouter = express.Router();


function router() {

  const { createUser } = userControllers();

  // userRouter.route('/all_users').get(createUser);
  userRouter.route('/create_user').post(createUser);
  // userRouter.route('/update').put(createUser);
  // userRouter.route('/get_by_post/:id').get(createUser);
  // userRouter.route('/get_by_id/:id').get(createUser);
  // userRouter.route('/delete/:id').delete(createUser);

  return userRouter;
};


module.exports = router;