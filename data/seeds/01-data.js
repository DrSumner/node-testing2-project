/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('data').del()
  await knex('data').insert([
    {name:"Bob" , age: 44},
    {name:"Sarah" , age: 23},
    {name:"John" , age: 60},
  ]);
};
