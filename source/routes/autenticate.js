const jwt = require("jsonwebtoken");

const autenticate = async (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(401).json({ message: "No authorization header" });
  }

  const [type, credentials] = auth.split(" ");
  const [email, password] = Buffer.from(credentials, "base64")
    .toString()
    .split(":");

  if (password === "any_password") {
    const token = await jwt.sign(req.body, "new_password");

    res.setHeader("X-token", token);
    return next();
  }
  return res.status(401).json({ message: "credentials are not valid" });
};

const authorize = async (req, res, next) => {
  const token = req.headers["x-token"];

  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }

  try {
    await jwt.verify(token, "new_password");
    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};

module.exports = { autenticate, authorize };
