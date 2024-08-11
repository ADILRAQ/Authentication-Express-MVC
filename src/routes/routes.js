const router = require('express').Router();
const { handleLogout } = require('../controllers/logout.controller');
const { handleSignup } = require('../controllers/signup.controller');
const authorization = require('../middlewares/authorization');

// username's value will be passed to the home.ejs, It's like Props at react components
router.get("/", authorization, (req, res) => res.render('home', {username: req.user.username}));

router.get('/signup', (_, res) => res.render('signup'));

router.post('/signup', handleSignup);

router.post('/logout', authorization, handleLogout);

module.exports = router;
