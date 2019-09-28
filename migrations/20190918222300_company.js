exports.up = knex =>
  knex.schema.createTable('company', (table) => {
    table.integer('id').primary();
    table.string('NIT');
    table.string('business_name');
    table.integer('city_id');
    table.integer('society_type');
    table.string('name');
    table.string('address');
    table.integer('phone');
    table.string('representative');
    table.string('sector');
    table.string('mail');
  });

exports.down = knex => knex.schema.dropTable('company');
