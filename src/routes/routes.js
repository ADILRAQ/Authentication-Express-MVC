const router = require('express').Router();
const { handleLogout } = require('../controllers/logout.controller');
const { handleSignin } = require('../controllers/signin.controller');
const authorization = require('../middlewares/authorization');

router.get("/", authorization, (req, res) => res.render('home', {username: req.user.username}));

router.get('/signin', (_, res) => res.render('signin'));

router.post('/signin', handleSignin);

router.post('/logout', authorization, handleLogout);

module.exports = router;
