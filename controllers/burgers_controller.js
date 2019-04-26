//Dependencies
const express = require("express");
const burger = require("../models/burger");
const router = express.Router();
//Routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbarsObj = {
            burgers: data
        };
        console.log(hbarsObj);
        res.render("index", hbarsObj);
    });
});
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        res.json({id: result.insertId});
    });
});
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(400).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;