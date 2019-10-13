const CompanyRepository = module.exports;
const DB = require('../utils/DB');

CompanyRepository.create = company => DB('company').insert(company).returning('*');

CompanyRepository.findByNit = NIT => DB('company').select('*').where({ NIT });

CompanyRepository.findCompanyByFilters = params => DB('company').select('*').where(params);
