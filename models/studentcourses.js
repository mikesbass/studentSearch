var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var StudentCourses = sequelize.define("StudentCourses", {}, {
    timestamps: false
  });
  return StudentCourses;
};
