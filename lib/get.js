const sequelize = require('./database.js');
const Sequelize = require('sequelize');

var Team = require("../models/team.js")(sequelize, Sequelize);

module.exports.getAll = function(event, cb, table_name) {
    Team.findAll().then(projects => {
        console.log(projects)
        console.log(JSON.stringify(projects))
    })
};