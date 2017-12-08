var express = require("express");
var app = express();
var path = require('path');

var users = [];
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//form submitting============================================
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});


var user = {};
app.post('/result', function (req, res){
    console.log(req.body);
    user["name"] = req.body.name;
    user["email"] = req.body.email;
    user["language"] = req.body.language;
    user["comment"] = req.body.comment;

    users.push(user);
    console.log(users);
  //code to add user to db goes here!
  res.render('result', {users:users});
//   res.redirect('/users');
});

app.get('/result', function (req, res){
  res.render('result', {users});
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})