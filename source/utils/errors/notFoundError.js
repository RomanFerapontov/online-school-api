class NotFoundError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, NotFoundError);
    this.name = "NotFoundError";
  }
}

module.exports = { NotFoundError };
