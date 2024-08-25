const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  //req for request and res for respons, because the parameter names don't matter but the values instilled in them.
  res.send("<h1>" + new Date().toISOString() + "<h1>");
});

app.get("/", function (req, res) {
  res.send(
    "<form action='store-user' method='POST'> <label>Your Name</label> <input type='text' name='username'> <button>Submit</button> </form>" //because I used the double quotes for the form element which wraps all of the other elements I cannot use it in the other elements because the IDE will think it's a closing double qoutes.
  );
});
app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored</h1>");
});
app.listen(3000);
