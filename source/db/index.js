const mongoose = require("mongoose");
const dg = require("debug");

const debug = dg("db");

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = mongoose.connect(process.env.DB_URL, mongooseOptions);

connection
  .then(() => {
    debug("DB is connected");
  })
  .catch(({ message }) => {
    debug(`DB connection error ${message} `);
  });

module.exports = { connection };
