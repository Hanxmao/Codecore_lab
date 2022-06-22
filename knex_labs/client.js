const knex = require('knex');
const developmentConfig= require('./knexfile.js').development;
const client =knex(developmentConfig);

module.exports = client