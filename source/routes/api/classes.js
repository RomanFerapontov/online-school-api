const express = require("express");
const { authorize } = require("../autenticate");
const ClassesController = require("../../controllers/classes.js");

const router = express.Router();
const controller = new ClassesController();

router.route("/").get(controller.get).post(authorize, controller.post);

router
  .route("/:classHash")
  .get(authorize, controller.getByHash)
  .post(authorize, controller.updateByHash)
  .delete(authorize, controller.deleteByHash);

router.post("/:classHash/enroll", authorize, controller.enroll);
router.post("/:classHash/expel", authorize, controller.expel);

module.exports = router;
