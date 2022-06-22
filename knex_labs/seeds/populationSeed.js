const populationData= require('../populationResult')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  knex('populations').insert(populationData).returning('year', 'quantity',"country_id") .then((data) => {
    console.log(data);
    knex.destroy();
});
};
