//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: ahjd@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("I am blah blah blah.");
});

app.get("/hobbies", function(req, res){
  res.send("test test test.");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
