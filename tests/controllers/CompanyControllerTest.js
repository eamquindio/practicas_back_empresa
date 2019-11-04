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

  it('create company test', () => chai
    .request(app)
    .post(API)
    .send({
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
    })
    .then(async () => {
      const companyToAssert = await CompanyRepository.findByNit('q');
      assert.equal(companyToAssert.NIT, 'q');
    }));

  it('create company already exists test', async () => {
    await CompanyRepository.create({
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

    return chai
      .request(app)
      .post(API)
      .send({
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
      })
      .catch((error) => {
        assert.equal(error.status, 404);
      });
  });

  it('find company by nit test', async () => {
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
      .get(`${API}/find_by_nit?NIT=q`)
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

  it('find company by nit empty test', async () => chai
    .request(app)
    .get(`${API}/find_by_nit?NIT=q`)
    .then(async (response) => {
      assert.equal(response.status, 204);
    }));
});
