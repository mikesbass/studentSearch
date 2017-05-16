module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  return Student;
};
