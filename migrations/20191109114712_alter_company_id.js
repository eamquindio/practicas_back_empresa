exports.up = knex =>
  knex.schema.alterTable('company', (table) => {
    table.increments('id').primary();
  });

exports.down = knex => knex.schema.dropTable('company');
