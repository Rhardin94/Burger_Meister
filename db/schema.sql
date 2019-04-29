DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(55) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);