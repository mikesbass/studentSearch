// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // TODO: this should come from your db.Student.find({})

    app.get("/api/students", function(req, res) {
        db.Student.findAll({}).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    app.get("/api/students/:id", function(req, res) {
        // Find one Student with the id in req.params.id and return them to the user with res.json
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    app.post("/api/students", function(req, res) {
        // console.log(req.body);
        db.Student.create(req.body).then(function(dbStudent) {
            res.redirect("/");
            // res.json(dbStudent);
        });
    });

};
