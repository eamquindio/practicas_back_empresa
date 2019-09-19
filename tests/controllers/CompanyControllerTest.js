const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const CompanyRepository = require('../../app/repositories/CompanyRepository');
const Helper = require('../Helper');

const API = '/api/empresas-ms/company';
chai.use(chaiHttp);

describe('Company CRUD flows', () => {
  before(() => Helper.migrate());

  beforeEach(async () => {
    await Helper.clear();
  });

  it('find person by name test', async () => {
    await CompanyRepository.create([{
      id: 1,
      NIT: 'q',
      business_name: 'q',
      city_id: 1,
      society_type: 1,
      name: 'q',
      address: 'q',
      phone: 1,
      representative: 'q',
      sector: 'q',
      mail: 'q',
    },
    {
      id: 2,
      NIT: 'q',
      business_name: 'q',
      city_id: 1,
      society_type: 1,
      name: 'q',
      address: 'q',
      phone: 1,
      representative: 'q',
      sector: 'q',
      mail: 'q',
    }]);

    return chai
      .request(app)
      .get(`${API}/find_by_name?NIT=q`)
      .then(async (response) => {
        const { body } = response;
        assert.deepEqual(body[0], {
          id: 1,
          NIT: 'q',
          business_name: 'q',
          city_id: 1,
          society_type: 1,
          name: 'q',
          address: 'q',
          phone: 1,
          representative: 'q',
          sector: 'q',
          mail: 'q',
        });
      });
  });

  it('find person by name empty test', async () => chai
    .request(app)
    .get(`${API}/find_by_name?NIT=q`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
