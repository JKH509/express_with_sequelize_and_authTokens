

const projectController =()=> {  

  const createProject = async (req, res, next) => {
    const { msg } = req.body;
    console.log("MSG ", msg)
    res.json({message: "thanks for creating a project"})
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
};

  return {
    createProject,
  }
}

module.exports = projectController
