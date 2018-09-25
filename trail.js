var express = require('express');
var mysql = require('mysql');
var app = express();
app.set('view engine', 'ejs');

/*var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/
/*var Users = {
  'David': {
    age: 52,
    occupation: 'Professor',
    hobby: 'Swimming'
  },
  'Robert': {
    age: 34,
    occupation: 'Engineer',
    hobby: 'Running'
  },
  'Jane': {
    age: 28,
    occupation: 'Nurse',
    hobby: 'Chess'
  }
};*/
// route pagesindec

//getTemp();
//setInterval(app.get, 2000);
var temperature = 0.0;
var humidity = 0.0;
function getTemp() {
  temperature = (Math.random() * (35 - 30) + 30);
  console.log(temperature);
  humidity = (Math.random() * (40 - 15) + 15);
  console.log(humidity);
}
  //console.log(timestamp)
  //console.log(typeof(timestamp));
  //timestamp.toString()
//  return (timestamp, temperature, humidity);
  //drawChart(timestamp, temperature, humidity);
  app.get('/', function (req, res) {
    while (true) {
      //setInterval(app.get, 2000);
      setInterval(getTemp, 1000);
      res.write(res.render('index', {temperature : temperature, humidity : humidity}));
    }
    //var usersArray = [];
    //for (var i in Users) { usersArray.push(i); }
    //res.render('index', { users: usersArray });
    //var timestamp = new Date();
  });
//}

/*
app.get('/', function (req, res) {
//  var usersArray = [];
  //for (var i in Users) { usersArray.push(i); }
  //res.render('index', { users: usersArray });
  res.render('index', {);
});*/

/*app.get('/user', function (req, res) {
  var check = Users[req.query.name];
  if (check) {
    res.render('user', { name: req.query.name, info: check });
  } else {
    res.send('User does not exist...');
  }
});*/

// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});
