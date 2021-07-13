require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;
const drinks = require("./models/drinks");
const food = require("./models/food");


app.get("/drinks", (req, res) => {
  // res.send(drinks)
  res.render("index.ejs",{drinks,food})
  });

app.get("/drinks/:id", (req, res) => {
    const pos = req.params.id;
   // res.send(pos);
    const drinkLength = drinks.length
    res.render("show.ejs",{drinks,food,pos,drinkLength})
    });

app.listen(PORT, () => {
    console.log("Welcome to the Gitpub App!:", PORT);
  });