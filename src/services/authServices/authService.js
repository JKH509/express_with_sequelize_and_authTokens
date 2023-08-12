const CustomError = require("../../errors/customErrors");
const db = require("../../models");
let User = db.User;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const handleLoginService = async (username, password) => {
  console.log("username ", username, ' pwd ', password)
  const foundUser = await User.findOne({ where: { user_name: username } });
  console.log("foundUser ", foundUser)
  if (!foundUser) {
    throw new CustomError(
      "Please check email and password",
      404,
      "This email doesn't exist."
    );
  }

  const passwordMatch = await bcrypt.compare(password, foundUser.user_password);
  if (!passwordMatch) {
    throw new CustomError(
      "Invalid password",
      401,
      "The provided password is incorrect."
    );
  }

  const accessToken = jwt.sign(
    { username: foundUser.username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "30s" }
  );

  // const refreshToken = jwt.sign(
  //   { username: foundUser.username },
  //   process.env.REFRESH_TOKEN_SECRET,
  //   { expiresIn: "1d" }
  // );

  // try {
  //   await User.update(
  //     { token: refreshToken },
  //     {
  //       where: { id: foundUser.id },
  //     }
  //   );
  // } catch (error) {
  //   throw new CustomError("Couldn't update the user token", 401, error.message);
  // }

  // return { refreshToken, accessToken, userId: foundUser.id };
  return {  accessToken, userId: foundUser.user_id };
};

module.exports = { handleLoginService };
