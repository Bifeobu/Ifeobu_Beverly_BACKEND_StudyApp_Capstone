const { Router } = require('express');
const formsCtrl = require('../controllers/forms.js');

const router = Router();

//user POST route
router.post('/check-in', formsCtrl.createForm);

module.exports = router;
