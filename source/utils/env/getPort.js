const { ValidationError } = require("../errors");

const getPort = () => {
  const { PORT } = process.env;

  if (!PORT) {
    throw new ValidationError("Environment variable PORT should be specified");
  }

  return PORT;
};

module.exports = getPort;
