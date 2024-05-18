const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9900; //9000

app.set("view engine", "ejs");
app.get("/home", (req, res, next) => {
  try {
    res.render("home.ejs");
  } catch (error) {
    res.status(500).send("Error rendering the home page");
  }
});
//register
app.get("/register", (req, res, next) => {
  res.render("authentication/register");
});
//login
app.get("/login", (req, res, next) => {
  res.render("authentication/login");
});

//for coonnecting css of public file
app.use(express.static("public/css"));

app.listen(PORT, () => console.log(`running on port: ${PORT}`));
