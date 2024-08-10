const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {

	const { access } = req.cookies;

	if (!access) {
		res.redirect('/signin');
		return ;
	}

	jwt.verify(access, process.env.SECRET, (err, decoded) => {
		// The token could be checkd if it's expired too
		// and create a new token instead of redirecting the response to the signin
		if (err) {
			res.redirect('/signin');
			return ;
		}
		const {username, password} = decoded;
		req.user = {username, password};
		next();
	})
}

module.exports = authorization;