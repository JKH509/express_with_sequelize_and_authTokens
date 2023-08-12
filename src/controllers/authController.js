const CustomError = require('../errors/customErrors');
const authService = require('../services/authServices/authService');
const { refreshTokenService } = require('../services/authServices/refreshService');
// const handleRegisterService = require('../services/authServices/registerService');
const registerService = require('../services/authServices/registerService'); // Renamed for clarity


const authController =()=> {

  const handleRegister = async (req, res, next) => {
    
    const { username, email, pwd } = req.body;
    console.log("handleRegister ", username, pwd )
    try {
        
        const newUser = await  registerService.handleRegisterService(username, email, pwd);
        console.log(newUser.get());
        res.sendStatus(201)
        // .json({ 'success': `New user ${username} created!` });
    } catch (error) {
      next(error)
    }
};

const handleLogin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
      // const { refreshToken, accessToken, userId } = await loginServi (username, pwd);
      // const { refreshToken, accessToken } = await authService.handleLoginService(username, password);
      const { accessToken } = await authService.handleLoginService(username, password);

      // res.cookie('jwt', refreshToken, {
      //     httpOnly: true,
      //     sameSite: 'None',
      //     secure: false, // Ensure your server supports HTTPS when using 'secure: true'
      //     maxAge: 24 * 60 * 60 * 1000  // Cookie will expire in 1 day
      // });

      res.status(200).json({ accessToken });
  } catch (error) {
      next(error);
  }
};


const handleRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
      return res.sendStatus(401);
  }

  try {
      const accessToken = await refreshTokenService(cookies.jwt);
      res.json({ accessToken });
  } catch (error) {
      if (error.message === "Invalid refresh token" || error.message === "Invalid token or username mismatch") {
          return res.sendStatus(403); // Forbidden
      }
      next(error);
  }
};


const handleLogout = async (req, res, next) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
      return res.sendStatus(204); //No content
  }

  try {
      await  logoutService(cookies.jwt);
      
      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: false });
      res.sendStatus(204);
  } catch (error) {
      next(error);
  }
};

  return {
    handleRegister,
    handleLogin,
    handleRefreshToken,
    handleLogout
  }
}

module.exports = authController
