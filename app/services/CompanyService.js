const CompanyService = module.exports;
const CompanyRepository = require('../repositories/CompanyRepository');

CompanyService.findByName = (NIT) => {
  console.log('findByName company');
  
  return CompanyRepository.findByName(NIT);
};
