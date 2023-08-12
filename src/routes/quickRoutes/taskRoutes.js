const express = require("express");
const taskControllers = require("../../controllers/quickControllers/taskControllers");
const taskRouter = express.Router();


function router() {

  const { createTask } = taskControllers();

    // taskRouter.route('/all_task').get(createUser);
    taskRouter.route('/create_task').post(createTask);
    // taskRouter.route('/update').put(createUser);
    // taskRouter.route('/get_by_post/:id').get(createUser);
    // taskRouter.route('/get_by_id/:id').get(createUser);
    // taskRouter.route('/delete/:id').delete(createUser);

  return taskRouter;
};


module.exports = router;