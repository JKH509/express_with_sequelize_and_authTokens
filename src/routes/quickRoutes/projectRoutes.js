const express = require("express");
const projectControllers = require("../../controllers/quickControllers/projectControllers");

const projectRouter = express.Router();


function router() {

  const { getAllProject, createProject, projectById, updateProject, deleteProject } = projectControllers();

  projectRouter.route('/all_projects').get(getAllProject);
  projectRouter.route('/create_project').post(createProject);
  projectRouter.route('/get_project_by/:id').get(projectById);
  projectRouter.route('/update_project/:id').put(updateProject);
  projectRouter.route('/delete_project/:id').delete(deleteProject);

  return projectRouter;
};


module.exports = router;