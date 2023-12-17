const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/message", async (req, res, next) => {
  const message = await fs.promises.readFile("message.txt");

  const formHtml = `<form action="/message" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
  <input type="text" name="message" id="message" placeholder="message">
  <input
    type="hidden"
    name="username"
    id="username"
    placeholder="username"
  />
  <br/>
  <button type="submit">Send</button></form>`
  
  const responseHtml = `
    <body>
      ${message}
      ${formHtml}
    </body>`;

  res.send(responseHtml);
});

router.post("/message", async (req, res, next) => {
  const message = req.body.message;
  const username = req.body.username;
  // Validate message if needed

  if (!message) {
    // Handle invalid message error
    return res.status(400).send("Error: Message cannot be empty");
  }
  const fullMessage = `${username}: ${message}`;
  const file = await fs.promises.readFile("message.txt");
  const completeChat = file +" "+ fullMessage;
  await fs.promises.writeFile("message.txt", completeChat);

  res.redirect("/message");
});

// Implement login logic outside this route and update currentUser

module.exports = router;
