'use strict';
var team = require("./ops/team");

module.exports.teamsAll = (event, context, callback) => {
  team.getAll(event, context, callback);
};

module.exports.createTeam = (event, context, callback) => {
  team.create(event, context, callback )
};

module.exports.updateTeam = (event, context, callback) => {
  team.update(event, context, callback )
}
