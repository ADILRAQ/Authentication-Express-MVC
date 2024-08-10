const router = require('express').Router();
const { googleSignin, getData } = require('../controllers/google.controller');

router.get('/signin', googleSignin);

router.get('/callback', getData);

module.exports = router;