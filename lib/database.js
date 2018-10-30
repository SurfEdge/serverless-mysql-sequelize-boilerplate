const Sequelize = require('sequelize');

var sequelize = new Sequelize('tpcricket', 'root', 'root', {
    host: 'localhost', port: '8889',
    dialect: 'mysql',
});

module.exports = sequelize;
