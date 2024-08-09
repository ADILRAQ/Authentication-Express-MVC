const users = require('../models/users.model');

const handleLogout = (req, res) => {

    users.deleteUser(req.user.username);
    res.cookie('access', '', {expires: new Date(0), httpOnly: true});
    res.redirect('/signin');
}

module.exports = {
    handleLogout,
}