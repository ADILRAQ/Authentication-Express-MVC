const { handleLogout } = require('../controllers/logout.controller');
const { handleSignin } = require('../controllers/signin.controller');

const router = require('express').Router();

router.get("/", (req, res) => {
    res.render('home', {username: 'Adil'});
});

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.post('/signin', handleSignin);

router.post('/logout', handleLogout);

module.exports = router;
