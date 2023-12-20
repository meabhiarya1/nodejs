const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const fs = require("fs");

const router = express.Router();

router.get("/message", async (req, res, next) => {
  const message = await fs.promises.readFile("message.txt");
  // <p>${message}</p>;
  res.sendFile(path.join(rootDir, "views", "message.html"));
});

router.post("/message", async (req, res, next) => {
  const message = req.body.message;
  const username = req.body.username;
  // Validate message if needed

  if (!message) {
    // Handle invalid message error
    return res.status(400).send("Error: Message cannot be empty");
  }
  const fullMessage = `<b>${username}</b>: ${message} <br>`;
  const file = await fs.promises.readFile("message.txt");
  const completeChat = file + " " + fullMessage;
  await fs.promises.writeFile("message.txt", completeChat);

  res.redirect("/message");
});

module.exports = router;
