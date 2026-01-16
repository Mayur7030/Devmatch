const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.post("/login", (req, res) => {
  res.send("client connected to server");
});

app.listen(9999, () => {
  console.log("server started!");
});
