exports.up = knex =>
  knex.schema.alterTable('company', (table) => {
    table.integer('id').alter().increments();
  });

exports.down = knex => knex.schema.dropTable('company');
