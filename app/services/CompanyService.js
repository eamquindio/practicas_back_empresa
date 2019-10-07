const CompanyService = module.exports;
const CompanyRepository = require('../repositories/CompanyRepository');

CompanyService.findByNit = (NIT) => {
  console.log('findByName company');

  return CompanyRepository.findByNit(NIT);
};

CompanyService.findBySector = (sector) => {
  console.log('findBySector company');

  return CompanyRepository.findBySector(sector);
};

CompanyService.findByBusinessName = (businessName) => {
  console.log('findByBusinessName company');

  return CompanyRepository.findByBusinessName(businessName);
};

CompanyService.findByName = (name) => {
  console.log('findByName 2 company');

  return CompanyRepository.findByName(name);
};

CompanyService.findByMail = (mail) => {
  console.log('findByMail company');

  return CompanyRepository.findByMail(mail);
};
