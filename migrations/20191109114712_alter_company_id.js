exports.up = knex =>
  knex.schema.alterTable('company', (table) => {
    table.dropColumn('id');
    table.increments();
  });

exports.down = knex => knex.schema.dropTable('company');
