var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hero_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    power: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  }, {
    timestamps: false
  });
  return Student;
};
