const express = require("express");
const userControllers = require("../../controllers/quickControllers/userControllers");
const userRouter = express.Router();

function router() {

  const { getAllUser, createUser, userById, updateUser, deleteUser } = userControllers();

  userRouter.route('/all_users').get(getAllUser);
  userRouter.route('/create_user').post(createUser);
  userRouter.route('/get_user_by/:id').get(userById);
  userRouter.route('/update_user/:id').put(updateUser);
  userRouter.route('/delete_user/:id').delete(deleteUser);

  return userRouter;
};


module.exports = router;


// const express = require("express");
// const userControllers = require("../../controllers/quickControllers/userControllers");
// const userRouter = express.Router();


// function router() {

//   const { getAllUser, createUser, userById, updateUser, deleteUser } = userControllers();

//   const routes = [
//     { path: '/all_users', method: 'get', handler: getAllUser },
//     { path: '/create_user', method: 'post', handler: createUser },
//     { path: '/get_user_by/:id', method: 'get', handler: userById },
//     { path: '/update_user/:id', method: 'put', handler: updateUser },
//     { path: '/get_by_id/:id', method: 'delete', handler: deleteUser },
//   ];

//   routes.forEach((route) => {
//     userRouter[route.method](route.path, route.handler);
//   });

//   return userRouter;
// };


// module.exports = router;