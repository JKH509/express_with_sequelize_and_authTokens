const db = require('../../models');
let User = db.User
// const User = require('../../models').User;

const handleLogout = async (refreshToken) => {
    const foundUser = await User.findOne({ where: { token: refreshToken } });

    if (foundUser) {
        await User.update({ token: "" }, {
            where: { id: foundUser.id }
        });
    }

    return;
}


module.exports = {
  handleLogout,
};