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

// Export routes for server.js to use.
module.exports = htmlRouter;
