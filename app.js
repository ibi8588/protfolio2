var express = require('express');
var app = express();

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.get('/index', function (req, res) {
  res.render('index');
})

app.get('/api/profile', function profile(req, res) {
  res.json({
    name: "Ibrahim Aldridge",
    githubUsername: "ibi8588",
    githubLink: "https://github.com/ibi8588",
    githubProfileImage: "https://lh3.googleusercontent.com/-yDMMcpIxaMQ/AAAAAAAAAAI/AAAAAAAAHbw/RCCjxJLrSz4/s640/photo.jpg",
    personalSiteLink: "http://www.ibrahimaldridge.com",
    currentCity: "Oakland, CA",
    pets: [{name: "Sally", type: "Dog", breed: "Golden Retriever"}, {name: "Billy", type: "Lizard", breed: "Wild"}]
  })
})

var server = app.listen(3000, function(){
      console.log("The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!")
});
