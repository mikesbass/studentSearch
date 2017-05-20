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

app.get("/courses", function(req, res) {
    //console.log(req.body);
    db.Course.create({
      instructor: "test1",
      subject: "test1",
    }).then(function(results) {
      console.log("successful courses")
    });

  });




app.get("/ShowStudentCourses/:firstName/:LastName", function(req, res) {
db.Course.findAll({
  include: [{
     model: Student,
     where: {
             first_name:req.params.firstName ,
             last_name:req.params.LastName
     }
  }]
}).then(function(results){
  console.log(results);
});
});

app.get("/MakeStudentCourse",function(req, res){
    console.log('here');
    //let post = Object.assign({}, request.payload, request.params);
    db.Student.create({
        first_name:  "Noushin",
        last_name:   "sjd",
        student_email: "Nooshin_sjd@yahoo.com",
        gender: "Female",
        hero_name: "superman",
        power: "many",
        Course:[{id : 1}]
      },{
        include: [{
        model: db.Course,
        }]
    }).then(function(newPost){

        if(!newPost){
          console.log("NOT Success");
        }
        else  { console.log(" Success");
        }
    });
  });
  


app.get('/api/student/:studentId', function (req, res, next) {
  db.Student.findAll({
    where: { id: req.params.studentId },
    include: [{
      model: db.Course,
      through: {
        attributes: ['instructor', 'subject']
      },
    }]
  }).then(function (student) {
    res.status(200).json(student);
  }).catch(next);
});
}


  

 

