exports.up = knex =>
  knex.schema.table('company', (table) => {
    table.string('person_type');
    table.string('limited_partnership');
    table.string('registration_date_commerce_chamber');
    table.integer('cell_phone');
    table.integer('department_id');
    table.string('business_description');
  });

exports.down = knex =>
  knex.schema.table('company', (table) => {
    table.dropColumn('person_type');
    table.dropColumn('limited_partnership');
    table.dropColumn('registration_date_commerce_chamber');
    table.dropColumn('cell_phone');
    table.dropColumn('department_id');
    table.dropColumn('business_description');
  });
