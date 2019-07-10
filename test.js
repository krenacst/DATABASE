var mysql = require('mysql2');
let readline = require('readline-sync');
var name = readline.question('title of the game: ');
var description = readline.question('make it short: ');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'linuxconfig.org',
  database: 'zeta_test'
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
  var sql = 'INSERT INTO Games (name, description) VALUES ?';
  var values = [[name, description]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
});
