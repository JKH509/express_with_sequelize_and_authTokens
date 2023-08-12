const CustomError = require("../../errors/customErrors");
const { createOrg } = require("../../services/organization/organizationService");



const organizationController = () => {
  
  const createOrganization = async (req, res, next) => {
    try {
      await createOrg(req.body)
      res.status(200).send({ message: "Organization was registered successfully!" });
    } catch (error) {
      next(new CustomError('Organization registration failed', 500, error.message));  // 500 or another appropriate status code
    }
  }

  
  return {
    createOrganization
  };
}

module.exports = organizationController;
