require("dotenv").config();
const { app } = require("./server.js");
const getPort = require("./utils/env/getPort.js");
const dg = require("debug");
require("../source/db/index.js");

const PORT = getPort();

const debug = dg("server:main");

app.listen(PORT, () => {
  debug(`Server API is up on ${PORT}`);
});
