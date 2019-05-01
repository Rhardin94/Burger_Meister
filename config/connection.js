const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Frogsand1!",
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) {
        console.error("Connection error:" + err.stack);
    };
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;