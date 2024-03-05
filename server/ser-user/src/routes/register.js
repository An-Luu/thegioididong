const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated} = require('../config/tool/checkauthenticated')

const RegisterController = require("../app/controllers/RegisterController")

router.get('/', checkNotAuthenticated, RegisterController.pace_register),
router.post('/', checkNotAuthenticated, RegisterController.register)


module.exports = router