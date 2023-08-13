const profileController = () => {

  const getAllProfile = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "Heres all of your getAllProfile" });
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const createProfile = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for creating a profile" });
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const profileById = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "heres your query by ID" });
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const updateProfile = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "thanks for updating a profile" });
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  const deleteProfile = async (req, res, next) => {
    const { msg } = req.body;

    res.json({ message: "You deleted a profile" });
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
  };

  return {
    getAllProfile,
    createProfile,
    profileById,
    updateProfile,
    deleteProfile
  };
};

module.exports = profileController;
