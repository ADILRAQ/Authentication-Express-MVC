const jwt = require('jsonwebtoken');

const createAccess = (data) => {
    const token = jwt.sign(data, process.env.SECRET, { expiresIn: '1m' });
    return token;
}

module.exports = {
    createAccess,
}