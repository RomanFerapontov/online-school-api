const { validator } = require("../../utils");
const { authorize } = require("../autenticate");
const createUser = require("../../models/user.js");

const router = require("express").Router();
const controller = require("../../controllers/users.js");

router
  .route("/")
  .get([authorize], controller.get)
  .post([validator(createUser)], controller.post);

[validator(createUser)];

router
  .route("/:userHash")
  .get([authorize], controller.getByHash)
  .put([authorize], controller.updateByHash)
  .delete([authorize], controller.deleteByHash);

module.exports = router;
