const express = require("express");
const { autenticate } = require("../autenticate.js");
const Login = require("../../controllers/auth.js");

const router = express.Router();
const controller = new Login();

router.post("/login", [autenticate], controller.login);
router.post("/logout", controller.logout);

module.exports = router;
