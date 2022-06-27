const express = require("express");
const { authorize } = require("../autenticate");
const LessonsController = require("../../controllers/lessons.js");

const router = express.Router();
const controller = new LessonsController();

router.route("/").get(controller.get).post(authorize, controller.post);

router
  .route("/:lessonHash")
  .get([authorize], controller.getByHash)
  .put([authorize], controller.updateByHash)
  .delete([authorize], controller.deleteByHash);

router
  .route("/:lessonHash/videos/:videoHash")
  .get([authorize], controller.getVideoByHash)
  .delete([authorize], controller.deleteVideoByHash);

router
  .route("/:lessonHash/videos/:keynoteHash")
  .get([authorize], controller.getKeynoteByHash)
  .delete([authorize], controller.deleteKeynoteByHash);

router.post("/:lessonHash/videos", [authorize], controller.videos);
router.post("/:lessonHash/keynotes", [authorize], controller.keynotes);

module.exports = router;
