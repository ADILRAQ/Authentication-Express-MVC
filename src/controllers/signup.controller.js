const user = require("../models/userSingleton");
const { createAccess } = require("../utils/jwt.sign");

const handleSignup = (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) throw new Error("Invalid data !");

    user.set(username, password);
    const token = createAccess({ username, password });
    res.cookie("access", token, { httpOnly: true, secure: false, path: "/" });
    res.redirect("/");
  } catch (e) {
    // console.log(e);
    res.status(400).send("Something Bad !");
  }
};

module.exports = {
  handleSignup,
};
