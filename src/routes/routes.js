const { handleLogout } = require('../controllers/logout.controller');
const { handleSignin } = require('../controllers/signin.controller');
const authorization = require('../middlewares/authorization');
const router = require('express').Router();

router.get("/", authorization, (req, res) => {
    res.status(200).render('home', {username: req.user.username});
});

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.post('/signin', handleSignin);

router.post('/logout', handleLogout);

module.exports = router;
