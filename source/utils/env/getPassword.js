const { ValidationError } = require("../errors");

export const getPassword = () => {
  const { PASSWORD } = process.env;

  if (!PASSWORD) {
    throw new ValidationError(
      "Environment variable PASSWORD should be specified"
    );
  }

  return PASSWORD;
};

module.exports = getPassword;
