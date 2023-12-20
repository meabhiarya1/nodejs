const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/add-product");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const messgeRoutes = require("./routes/message");
const contactRoutes = require("./routes/contactus");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(loginRoutes);
app.use(messgeRoutes);
app.use(contactRoutes);

app.use("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "success.html"))
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
