const jwt = require('jsonwebtoken');

const handleSignin = (req, res) => {
    // console.log(req.body);
    const {username, password} = req.body;
    console.log({username, password});

    try {

    const token = jwt.sign({  }, '', { expiresIn: '5m' });

    console.log(token);

    // res.cookies('token', token, {httpOnly: true, secure: false, sameSite: 'Strict'});
    res.redirect('/');
    // res.send(token);
    } catch (e) {
        res.status(400).send('SOmething Bad !');
    }
}

module.exports = {
    handleSignin,
}
