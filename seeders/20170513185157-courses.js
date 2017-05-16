'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Courses', [{
      name: 'Prof X',
      subject: 'Discipline'
    }, {
      name: 'Storm',
      subject: 'Team Work'
    }, 
      {
      name: 'Wolverine',
      subject: 'Team Work'
    }, 
    {
      name: 'Rogue',
      subject: 'Power Control'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
