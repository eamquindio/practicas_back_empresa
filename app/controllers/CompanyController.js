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
