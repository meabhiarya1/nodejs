const express = require("express");
// const data = require('./data')

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(`<form action="/login" onSubmit="localStorage.setItem('username', document.getElementById('username').value)" method="POST">

  <input name="username" id="username" type="text">
  <button type="submit">Login</button>
  </form>`
  );
});

router.post("/login", (req, res, next) => {
    res.redirect('/message')
  });
  
module.exports = router;