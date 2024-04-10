// import requirements
const express = require("express");
const cors = require("cors");

// swapping
const app = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
// routes
app.use(require("./src/router/route"));

// listen
app.listen(port, () => {
  console.log(`server start from localhost:${port}`);
});
