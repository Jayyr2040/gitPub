require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;
const drinks = require("./models/drinks");

app.get("/drinks", (req, res) => {
  // res.send(drinks)
  res.render("index.ejs",{drinks})
  });

app.listen(PORT, () => {
    console.log("Welcome to the Gitpub App!:", PORT);
  });