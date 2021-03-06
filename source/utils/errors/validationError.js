class ValidationError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, ValidationError);
    this.name = "ValidationError";
  }
}

module.exports = { ValidationError };
