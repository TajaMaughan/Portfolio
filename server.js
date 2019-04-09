var express = require("express");
var app = express();
//sets port
var PORT = process.env.PORT || 8000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var path = require("path");
module.exports = function (app) {
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
}

//let you know server is working and give a link to the localhost
app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT);
  });