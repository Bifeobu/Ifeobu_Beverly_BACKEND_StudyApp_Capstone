const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

//user POST route
router.post('/check-in', usersCtrl.createForm);

module.exports = router;
