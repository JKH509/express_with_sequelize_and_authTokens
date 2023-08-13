

const taskController =()=> {  

  const getAllTask = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "Heres all of your getAllTask" });
    // try {
    //   const result = await task.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const createTask = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for creating a task" });
    // try {
    //   const result = await task.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const taskById = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "heres your query by ID" });
    // try {
    //   const result = await task.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const updateTask = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for updating a task" });
    // try {
    //   const result = await task.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const deleteTask = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "You deleted a task" });
    // try {
    //   const result = await task.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  return {
    getAllTask,
    createTask,
    taskById,
    updateTask,
    deleteTask
  };
}

module.exports = taskController
