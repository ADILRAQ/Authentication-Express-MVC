const { createAccess } = require("../utils/jwt");
const user = require('../models/users.model');

const GOOGLE_OAUTH_URL = process.env.GOOGLE_OAUTH_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CB_URL = `http://localhost:3001/google/callback`;
const GOOGLE_ACCESS_TOKEN_URL = process.env.GOOGLE_ACCESS_TOKEN_URL;

const googleSignin = (req, res) => {

	const state = "hellnah";
    const scope = [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile"
    ];
    const joined_scope = scope.join(" ");

    const GOOGLE_OAUTH_CONSENT_SCREEN_URL = `${GOOGLE_OAUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${GOOGLE_CB_URL}&scope=${joined_scope}&response_type=code&access_type=online&state=${state}`;
    console.log("Link:", GOOGLE_OAUTH_CONSENT_SCREEN_URL);
    res.status(200).json({link: GOOGLE_OAUTH_CONSENT_SCREEN_URL});
}

const getData = async (req, res) => {

	const { code } = req.query;
    console.log("Code:", code);
    const data = {
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: GOOGLE_CB_URL,
        grant_type: "authorization_code",
    };

    if (GOOGLE_ACCESS_TOKEN_URL) {
        const response = await fetch(GOOGLE_ACCESS_TOKEN_URL, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const { id_token } = await response.json();

        const token_info_response = await fetch(`${process.env.GOOGLE_TOKEN_INFO_URL}?id_token=${id_token}`)

        const info = await token_info_response.json();

        console.log("Info:", info);

        const { given_name } = info;

        user.set(given_name, '');

        const access = createAccess({username: given_name, password: ''});
        // const refresh_token = createRefreshToken({id: 1, email: info.email});

        res.cookie('access', access, {httpOnly: true, secure: false, path: '/'});
        // res.cookie('r_token', refresh_token, {httpOnly: true, secure: false, sameSite: 'strict'});
        res.status(token_info_response.status).redirect('/');
    }
}

module.exports = {
	googleSignin,
	getData,
}