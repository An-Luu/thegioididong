const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated } = require('../config/tool/checkauthenticated')

const logincontroller = require("../app/controllers/LoginControllers")

router.get('/', checkNotAuthenticated, logincontroller.login)


module.exports = router