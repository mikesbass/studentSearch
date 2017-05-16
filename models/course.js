module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  return Course;
};
