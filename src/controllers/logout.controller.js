
const handleLogout = (req, res) => {
    console.log('Logout');
    res.redirect('/signin');
}

module.exports = {
    handleLogout,
}