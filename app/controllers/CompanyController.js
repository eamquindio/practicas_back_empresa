const CompanyController = module.exports;
const CompanyService = require('../services/CompanyService');

CompanyController.save = async (req, res, next) => {
  const { body } = req;
  try {
    await CompanyService.create(body);

    return res.send();
  } catch (error) {
    console.log({ error });

    return next(error);
  }
};

CompanyController.findByNit = async (req, res, next) => {
  try {
    const { query: { NIT } } = req;
    const company = await CompanyService.findByNit(NIT);

    if (company.length === 0) return res.status(204).send(company);

    return res.send(company);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

CompanyController.findBySector = async (req, res, next) => {
  try {
    const { query: { sector } } = req;
    const company = await CompanyService.findBySector(sector);

    if (company.length === 0) return res.status(204).send(company);

    return res.send(company);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

CompanyController.findByBusinessName = async (req, res, next) => {
  try {
    const { query: { businnesName } } = req;
    const company = await CompanyService.findByBusinessName(businnesName);

    if (company.length === 0) return res.status(204).send(company);

    return res.send(company);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

CompanyController.findByName = async (req, res, next) => {
  try {
    const { query: { name } } = req;
    const company = await CompanyService.findByName(name);

    if (company.length === 0) return res.status(204).send(company);

    return res.send(company);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};

CompanyController.findByMail = async (req, res, next) => {
  try {
    const { query: { mail } } = req;
    const company = await CompanyService.findByMail(mail);

    if (company.length === 0) return res.status(204).send(company);

    return res.send(company);
  } catch (error) {
    console.log(error);

    return next(error);
  }
};
