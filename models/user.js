module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
                len: [6,255]
            },
            unique: true
        
        },
        password: {
            type: DataTypes.STRING
        }
    });
    return User;
}