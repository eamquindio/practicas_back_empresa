const CompanyService = module.exports;
const CompanyRepository = require('../repositories/CompanyRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

CompanyService.create = async (company) => {
  console.log('creating company');

  const companyToValidate = await this.find(company.id);
  console.log(companyToValidate);
  if (companyToValidate) throw ErrorHandler.BaseError('company already exists', 409);

  return CompanyRepository.create(company);
};

CompanyService.findByNit = (NIT) => {
  console.log('findByName company');

  return CompanyRepository.findByNit(NIT);
};

CompanyService.findCompanyByFilters = (params) => {
  console.log('findCompanyByFilters company');

  return CompanyRepository.findCompanyByFilters(params);
};
