

const profileController =()=> {  

  const createProfile = async (req, res, next) => {
    const { msg } = req.body;

    res.json({message: "thanks for creating a profile"})
    // try {
    //   const result = await profile.Create(business, user);
    //   res.status(201).json(result);
    // } catch (error) {
    //   console.error("handleRegisterBusiness ",error);
    //   next(error)
    // }
};

  return {
    createProfile,
  }
}

module.exports = profileController
