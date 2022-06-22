// const countriesdata= require('../result.js')
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex("countries")
//   .insert(countriesdata)
//   .returning('name', 'code')
//   .then((data) => {
//       console.log(data);
//       knex.destroy();
//   });
  
// };
