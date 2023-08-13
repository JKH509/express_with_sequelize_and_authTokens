const express = require("express");
const taskControllers = require("../../controllers/quickControllers/taskControllers");
const taskRouter = express.Router();


function router() {

  const { getAllTask, createTask, taskById, updateTask, deleteTask } = taskControllers();

  taskRouter.route('/all_tasks').get(getAllTask);
  taskRouter.route('/create_task').post(createTask);
  taskRouter.route('/get_task_by/:id').get(taskById);
  taskRouter.route('/update_task/:id').put(updateTask);
  taskRouter.route('/delete_task/:id').delete(deleteTask);

  return taskRouter;
};


module.exports = router;