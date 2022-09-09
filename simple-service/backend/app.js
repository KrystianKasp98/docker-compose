const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.status(200).send({ message: `it's works` });
});


module.exports = app;