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
        timestamps: false
    });
    return Course;
};
