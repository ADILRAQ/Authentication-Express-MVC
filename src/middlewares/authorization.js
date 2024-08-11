const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {

	const { access } = req.cookies;

	if (!access) {
		res.redirect('/signup');
		return ;
	}

	jwt.verify(access, process.env.SECRET, (err, decoded) => {
		// The token could be checkd if it's expired too
		// and create a new token instead of redirecting the response to the signup
		if (err) {
			res.redirect('/signup');
			return ;
		}
		const {username, password} = decoded;
		req.user = {username, password};
		next();
	})
}

module.exports = authorization;