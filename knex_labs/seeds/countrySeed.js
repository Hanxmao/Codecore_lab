const data= require('./result.js')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
  .then(function(){knex('countries').insert([
    
    ])
  }) 
    
  
};
