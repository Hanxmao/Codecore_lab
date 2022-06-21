/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('populations',(table)=>{
    table.bigIncrements('id')
    table.integer('year')
    table.integer('quantity')
    table.integer('country_id')
    table.foreign('country_id').references('countries.id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('populations')
};
