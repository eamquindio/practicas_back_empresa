const CompanyService = module.exports;
const CompanyRepository = require('../repositories/CompanyRepository');

CompanyService.findByNit = (NIT) => {
  console.log('findByName company');

  return CompanyRepository.findByNit(NIT);
};
