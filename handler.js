'use strict';
var team = require("./ops/team");

module.exports.teamsAll = (event, context, callback) => {
  team.getAll(event, context, callback);
};
