const jwt = require('jsonwebtoken');

const createAccess = (data) => {
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: '1m' });;
    // console.log('Token:', token);
    return token;
}

module.exports = {
    createAccess,
}