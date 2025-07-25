const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));
app.use('/assets', express.static(path.join(__dirname, "../assets")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
