const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const messgeRoutes = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/admin", adminRoutes);
// app.use("/shop", shopRoutes);

app.use(loginRoutes);
app.use(messgeRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(4000);
