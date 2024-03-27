const express = require('express');
const router = express.Router();

const checkController = require('../app/controllers/check');

router.post('/', checkController.get);

module.exports = router;