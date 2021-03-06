const CompanyService = module.exports;
const CompanyRepository = require('../repositories/CompanyRepository');
const ErrorHandler = require('../utils/ErrorHandlerMiddleware');

CompanyService.create = async (company) => {
  console.log('creating company');

  const companyToValidate = await this.findByNit(company.NIT);
  console.log(companyToValidate[0]);
  if (companyToValidate[0]) throw ErrorHandler.BaseError('company already exists', 409);

  return CompanyRepository.create(company);
};

CompanyService.findByNit = async (NIT) => {
  console.log('findByNIT company');

  return CompanyRepository.findByNit(NIT);
};

CompanyService.findCompanyByFilters = (params) => {
  console.log('findCompanyByFilters company');

  return CompanyRepository.findCompanyByFilters(params);
};
