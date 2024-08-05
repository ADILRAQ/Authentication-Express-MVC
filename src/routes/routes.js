const router = require('express').Router();

router.get("/", (req, res) => {
    res.render('home', {username: 'Adil'});
});

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.post('/signin', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
