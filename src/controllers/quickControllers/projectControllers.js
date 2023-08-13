

const projectController =()=> {  

  const getAllProject = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "Heres all of your getAllProject" });
    // try {
    //   const result = await project.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const createProject = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for creating a project" });
    // try {
    //   const result = await project.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const projectById = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "heres your query by ID" });
    // try {
    //   const result = await project.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const updateProject = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for updating a project" });
    // try {
    //   const result = await project.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const deleteProject = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "You deleted a project" });
    // try {
    //   const result = await project.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  return {
    getAllProject,
    createProject,
    projectById,
    updateProject,
    deleteProject
  };
}

module.exports = projectController
