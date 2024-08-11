const router = require('express').Router();
const { googleSignup, getData } = require('../controllers/google.controller');

router.get('/signup', googleSignup);

router.get('/callback', getData);

module.exports = router;