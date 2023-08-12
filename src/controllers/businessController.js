
const { handleRegisterBusinessService } = require('../services/authServices/registerService');




const businessController =()=> {  

  const handleRegisterBusiness = async (req, res, next) => {
    const { business, user } = req.body;
    try {
      const result = await handleRegisterBusinessService(business, user);
      res.status(201).json(result);
    } catch (error) {
      console.error("handleRegisterBusiness ",error);
      next(error)
    }
};

  return {
    handleRegisterBusiness,
  }
}

module.exports = businessController
