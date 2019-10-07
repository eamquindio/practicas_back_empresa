const CompanyRepository = module.exports;
const DB = require('../utils/DB');

CompanyRepository.create = company => DB('company').insert(company).returning('*');

CompanyRepository.findByNit = NIT => DB('company').select('*').where({ NIT });

CompanyRepository.findBySector = sector => DB('company').select('*').where({ sector });

CompanyRepository.findByName = name => DB('company').select('*').where({ name });

CompanyRepository.findByMail = mail => DB('company').select('*').where({ mail });
