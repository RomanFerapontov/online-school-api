const limiter = require("../utils/limiter.js");
const loggers = require("../utils/logger/logger.js");
const { NotFoundError } = require("../utils/errors");

const router = require("express").Router();

router.use("/api", [limiter(2, 1000 * 60)], require("./api"));

router.get("*", (req, res, next) => {
  const error = new NotFoundError(`${req.method}: ${req.originalUrl}`);
  res.status(400).json({ message: "Bad request" });
  next(error);
});

router.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") {
    const { name, message } = err;
    switch (name) {
      case "NotFoundError": {
        loggers.notFoundError.error(message);
        break;
      }
      case "ValidationError": {
        loggers.validationError.error(message);
        break;
      }
      default: {
        loggers.errors.error(message);
      }
    }
  }
  next();
});

module.exports = router;
