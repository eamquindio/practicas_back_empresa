exports.up = knex =>
  knex.schema.table('company', (table) => {
    table.string('person_type');
    table.string('limited_partnership');
    table.string('registration_date_commerce_chamber');
    table.string('cell_phone');
    table.string('department_id');
    table.string('business_description');
  });

exports.down = knex =>
  knex.schema.table('company', (table) => {
    table.dropColumn('name');
  });
