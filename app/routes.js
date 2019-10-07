const express = require('express');
const PersonController = require('./controllers/PersonController');
const CompanyController = require('./controllers/CompanyController');

const router = express.Router();

// Persons Routes
router.get('/persons/:id(\\d+)', PersonController.find);
router.post('/persons', PersonController.save);
router.delete('/persons/:id(\\d+)', PersonController.delete);
router.put('/persons/:id(\\d+)', PersonController.edit);
router.get('/persons/find_by_name', PersonController.findByName);
router.get('/persons/all', PersonController.listAll);

// Company Routes
router.post('/company', CompanyController.save);
router.get('/company/find_by_nit', CompanyController.findByNit);
router.get('/company/find_by_sector', CompanyController.findBySector);
router.get('/company/find_by_name', CompanyController.findByName);
router.get('/company/find_by_mail', CompanyController.findByMail);

module.exports = router;
