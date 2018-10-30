const sequelize = require('./database.js');

var Team = require("../models/team.js");

module.exports.getAll = function(event, cb, table_name) {
    Team.findAll().then(projects => {
        console.log(projects)
        console.log(JSON.stringify(projects))
    })
};