const Ajv = require("ajv");
const { ValidationError } = require("./errors");

const validator = (schema) => (req, res, next) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const valid = validate(req.body);

  if (valid) {
    return next();
  }

  const errors = validate.errors.map(({ message }) => message).join(", ");
  res.status(400).json({ message: errors });

  const error = new ValidationError(
    `${req.method}: ${req.originalUrl} [${errors}] ${JSON.stringify(req.body)}`
  );

  next(error);
};

module.exports = validator;
