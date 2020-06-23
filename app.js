var express = require("express");
app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res){
    res.render("home");
});
app.get("/about", function (req, res){
    res.render("about");
});

app.listen(3000, function () {
    console.log("啟動伺服器!!");
  });