const jwt = require('jsonwebtoken');
const user = require('../models/users.model');

const handleSignin = (req, res) => {

    const {username, password} = req.body;

    try {

        if (!username || !password)
            throw new Error("Invalid data !");

        user.set(username, password);
        const token = jwt.sign({ username, password }, 'secretkey', { expiresIn: '1m' });
        res.cookie('access', token, {httpOnly: true, secure: false, sameSite: 'Strict'});
        res.redirect('/');

    } catch (e) {
        res.status(400).send('Something Bad !');
    }
}

module.exports = {
    handleSignin,
}
