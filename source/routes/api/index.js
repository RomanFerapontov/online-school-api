const express = require("express");

const router = express.Router();

router.use("/", require("./auth.js"));
router.use("/users", require("./users.js"));
router.use("/lessons", require("./lessons.js"));
router.use("/classes", require("./classes.js"));

module.exports = router;
