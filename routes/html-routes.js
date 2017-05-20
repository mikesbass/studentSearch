// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.


    // index route loads index.html
    app.get("/", function(req, res) {
        db.Student.findAll({}).then(function(students) {
            res.render("index", { students: students });
        })
    });

  app.get('/student/:studentId', function (req, res, next) {
  db.Student.findAll({
    where: { id: req.params.studentId },
    include: [{
      model: db.Course,
      through: {
        attributes: ['instructor', 'subject']
      },
    }]
  }).then(function (student) {
  	//console.log(student);
    console.log(student);
    res.status(200).json(student);
    }).catch(next);
  	//res.render("search", { student: student}) 
  });

};
