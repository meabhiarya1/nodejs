const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/contact", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(name, email);
  res.redirect("/success");
});

module.exports = router;
