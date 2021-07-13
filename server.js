require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello")
  });

app.listen(PORT, () => {
    console.log("Welcome to the Gitpub App!:", PORT);
  });