var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    instructor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Course.belongsToMany(models.Student, 
        {
          through: models.StudentCourses
          
        });
      }
    },
    timestamps: false
  });
  return Course;
};
