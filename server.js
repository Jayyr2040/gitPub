require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;
const drinks = require("./models/drinks");
const food = require("./models/food");

/* const x = 12321;
const strxArr = x.toString().split("");
let countx = 0;
for (let i = 0; i < Math.ceil(strxArr.length /2); i++){
  if (strxArr[i] === strxArr[strxArr.length-1-i] ) {
       countx += 1;
  }
}
if (countx === Math.ceil(strxArr.length /2)){
  console.log("its a palindrome")
  console.log("count", countx)
}
else {console.log("its not")}
console.log(strxArr);


const y = (num) => {
  const invY = num.toString().split("").reverse().join("");
  return invY === num.toString().split("").join("") ? true : false
}

console.log(y(121)) */

app.use(express.static('public'));

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