const mysql = require("mysql2");

// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS ecommerceDB`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);

// Close the connection
connection.end();