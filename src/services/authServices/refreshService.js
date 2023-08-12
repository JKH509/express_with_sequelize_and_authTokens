const db = require('../../models');
let User = db.User
const jwt = require('jsonwebtoken');


const generateAccessToken = (username) => {
  return jwt.sign(
      { "username": username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
  );
};

const refreshTokenService = async (refreshToken) => {
  const foundUser = await User.findOne({ where: { token: refreshToken } });

  if (!foundUser) {
      throw new Error("Invalid refresh token");  // Adjust error type as needed
  }

  return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
          if (err || foundUser.username !== decoded.username) {
              reject(new Error("Invalid token or username mismatch"));  // Adjust error type as needed
          }

          const accessToken = generateAccessToken(decoded.username);
          resolve(accessToken);
      });
  });
}

module.exports = {
  refreshTokenService,
};