const express = require('express')
const router = express.Router();
const formController = require('./controller');

router.get('/', formController.getForms);
router.post('/',formController.postForms);

module.exports = router;