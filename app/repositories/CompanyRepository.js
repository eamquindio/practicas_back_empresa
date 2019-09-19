const CompanyRepository = module.exports;
const DB = require('../utils/DB');

CompanyRepository.create = company => DB('company').insert(company).returning('*');

CompanyRepository.findByName = NIT => DB('company').select('*').where({ NIT });
