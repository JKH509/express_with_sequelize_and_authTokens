const express = require("express");
const projectControllers = require("../../controllers/quickControllers/projectControllers");

const projectRouter = express.Router();


function router() {

  const { createProject } = projectControllers();

    // projectRouter.route('/all_projects').get(createUser);
    projectRouter.route('/create_project').post(createProject);
    // projectRouter.route('/update').put(createUser);
    // projectRouter.route('/get_by_post/:id').get(createUser);
    // projectRouter.route('/get_by_id/:id').get(createUser);
    // projectRouter.route('/delete/:id').delete(createUser);

  return projectRouter;
};


module.exports = router;