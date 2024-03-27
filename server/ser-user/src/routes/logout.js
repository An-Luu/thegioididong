const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated } = require('../config/tool/checkauthenticated')

const LogoutController = require("../app/controllers/LogoutControllers")

router.delete('/', LogoutController.logout)

module.exports = router