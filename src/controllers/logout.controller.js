const users = require('../models/userSingleton');

const handleLogout = (req, res) => {

    users.deleteUser(req.user.username);
    res.clearCookie('access', {httpOnly: true, secure: false, path: '/'});
    res.end();
}

module.exports = {
    handleLogout,
}