

const userController =()=> {  

  const getAllUser = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "Heres all of your getAllUser" });
    // try {
    //   const result = await user.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const createUser = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for creating a user" });
    // try {
    //   const result = await user.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const userById = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "heres your query by ID" });
    // try {
    //   const result = await user.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const updateUser = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for updating a user" });
    // try {
    //   const result = await user.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const deleteUser = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "You deleted a user" });
    // try {
    //   const result = await user.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  return {
    getAllUser,
    createUser,
    userById,
    updateUser,
    deleteUser
  };
}

module.exports = userController
