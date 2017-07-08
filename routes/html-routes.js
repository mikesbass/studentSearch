// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var express = require("express");
var htmlRouter = express.Router();

// Routes
// =============================================================

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    htmlRouter.get("/", function(req, res) {
        db.Student.findAll({}).then(function(students) {
            res.render("index", { students: students });
        })
    });

    htmlRouter.get("/students", function(req, res) {
        db.Student.findAll({}).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    htmlRouter.get("/students/:id", function(req, res) {
        // Find one Student with the id in req.params.id and return them to the user with res.json
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    htmlRouter.post("/students", function(req, res) {
        // console.log(req.body);
        db.Student.create(req.body).then(function(dbStudent) {
            res.redirect("/");
            // res.json(dbStudent);
        });
    });


// Export routes for server.js to use.
module.exports = htmlRouter;
