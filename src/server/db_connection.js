const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "nayan",
  password: "nayan",
  database: "gurukul",
});

connection.connect((err) => {
  if (err) {
    console.log("error connecting to database...");
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
