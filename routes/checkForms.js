const { Router } = require('express');
const formsCtrl = require('../controllers/forms.js');

const router = Router();

//POST form route
router.post('/check-in', formsCtrl.createForm);

//GET form  route
router.get('/check-in', formsCtrl.getForms);

//PATCH form route by ID
router.patch('/check-in/:id', formsCtrl.updateForm);

//DELETE form route by ID
router.delete('/check-in/:id', formsCtrl.updateForm);

module.exports = router;
