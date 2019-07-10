var mysql = require('mysql2');
let readline = require('readline-sync');
var question = readline.question('Would you like to insert a game to table Games? Press y or n ! ');
if (question === 'n') {
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'linuxconfig.org',
    database: 'zeta_test'
  });

  con.connect(function (err) {
    if (err) throw err;

    con.query('SELECT * FROM Games', function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
} else if (question === 'y') {
  var title = readline.question('title of the book: ');
  var writer = readline.question('make it short: ');

  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'linuxconfig.org',
    database: 'zeta_test'
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
    var sql = 'INSERT INTO Books (title, writer) VALUES ?';
    var values = [[title, writer]];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log('1 record inserted');
    });
  });
}
