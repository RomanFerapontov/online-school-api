const winston = require("winston");
const path = require("path");

const { combine, timestamp, printf } = winston.format;

const msgFormat = printf(({ message, timestamp }) => {
  return `${timestamp} ${message} `;
});

const loggers = {
  errors: winston.createLogger({
    level: "debug",
    format: combine(timestamp(), msgFormat),
    transports: new winston.transports.File({
      filename: path.join(__dirname, "./logs/error.log"),
      level: "error",
    }),
  }),
  notFoundError: winston.createLogger({
    level: "debug",
    format: combine(timestamp(), msgFormat),
    transports: new winston.transports.File({
      filename: path.join(__dirname, "./logs/not_found_errors.log"),
      level: "error",
    }),
  }),
  validationError: winston.createLogger({
    level: "debug",
    format: combine(timestamp(), msgFormat),
    transports: new winston.transports.File({
      filename: path.join(__dirname, "./logs/validation_errors.log"),
      level: "error",
    }),
  }),
};

module.exports = loggers;
