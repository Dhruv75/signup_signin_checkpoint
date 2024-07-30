const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("This is the Home page");
});
app.get("/signup", function (req, res) {
  res.send("This is the Signup page");
});
app.get("/login", function (req, res) {
  res.send("This is The Login page");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
