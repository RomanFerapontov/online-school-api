const rateLimit = require("express-rate-limit");

const limiter = (numRequests, resetIn) =>
  rateLimit({
    windowMs: resetIn,
    max: numRequests,
    headers: false,
  });

module.exports = limiter;
