exports.up = knex =>
  knex.schema.alterTable('company', (table) => {
    table.integer('id').increments().alter();
  });

exports.down = knex => knex.schema.dropTable('company');
