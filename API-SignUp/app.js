//jshint esversion:6

// Reuire the Installed Modules
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");




app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));



// Sends signup.html file to client/browser when visiting 'home' page

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});





app.post("/", function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us19.api.mailchimp.com/3.0/lists/c05b14af29";

  const options = {
    method: "POST",
    auth: "lorenzo1: insert api key here"
  };

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});


app.post("/failure", function(req, res) {
  res.redirect("/");
});






// Makes server 'listen' for any requests from client/browser

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});


// API Key
//

// List ID
// c05b14af29
