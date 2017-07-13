'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
    
        return queryInterface.bulkInsert('Student', [{
            first_name: 'John',
            last_name: 'Doe',
            student_email: 'abc@123.com',
            gender: 'Male',
            hero_name: 'Doe',
            power: 'Doe'
        }], {});
    },

    down: function(queryInterface, Sequelize) {
    }
};
