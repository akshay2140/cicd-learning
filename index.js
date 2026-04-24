const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from CI/CD! version 2", version: "2.0" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
