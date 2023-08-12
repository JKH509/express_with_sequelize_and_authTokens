

const taskController =()=> {  

  const createTask = async (req, res, next) => {
    const { business, user } = req.body;
    const { msg } = req.body;
    console.log("MSG ", msg)
    res.json({message: "thanks for creating a task"})

    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
};

  return {
    createTask,
  }
}

module.exports = taskController
