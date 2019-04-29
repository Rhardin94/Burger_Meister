//Dependencies
const express = require("express");
const burger = require("../models/burger");
const router = express.Router();
//Routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result) {
            if (result.insertedRows == 0) {
                res.status(404).end();
            } else {
        //res.json({id: result.insertId});
        res.redirect("/");
            }
    });
});
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(
        {
        devoured: req.body.devoured
        }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.redirect("/");
        }
    });
});
module.exports = router;