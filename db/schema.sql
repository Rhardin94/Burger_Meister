CREATE DATABASE burgers_db;
use burgers_db;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(55),
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);