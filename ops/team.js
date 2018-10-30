const sequelize = require('../lib/database.js');
const Sequelize = require('sequelize');

var Team = require("../models/team.js")(sequelize, Sequelize);

module.exports.getAll = function (event, ct, callback) {

    Team.findAll().then(projects => {

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                data: projects,
                status: true,
            }),
        };

        console.log(response);
        callback(null, response);
    })
    
};