// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var express = require("express");
var apiRouter = express.Router();
// Routes
// =============================================================


    // TODO: this should come from your db.Student.find({})
	apiRouter.get("/api/students", function(req, res) {
        db.Student.findAll({}).then(function(c) {
            res.json(c);
        });
    });

	apiRouter.get("/api/courses", function(req, res) {
        db.Course.findAll({}).then(function(dbCourse) {
            res.json(dbCourse);
        });
    });

    apiRouter.get("/api/students/:id", function(req, res) {
        // Find one Student with the id in req.params.id and return them to the user with res.json
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    apiRouter.post("/api/students", function(req, res) {
        // console.log(req.body);
        db.Student.create(req.body).then(function(dbStudent) {
            //res.redirect("/");
            res.json(dbStudent);
        });
    });

    // apiRouter.post("/students", function(req, res) {
    //      console.log(req.body);
    //     db.Student.create(req.body).then(function(dbStudent) {
    //         res.redirect("/");
    //         // res.json(dbStudent);
    //     });
    // });
    
// Export routes for server.js to use.
module.exports = apiRouter;