const express = require('express');
const router = express.Router();
const { checkAuthenticated, checkNotAuthenticated } = require('../config/tool/checkauthenticated')

const UserController = require("../app/controllers/UserControllers")

router.get('/sus/:name', checkAuthenticated, UserController.user)


module.exports = router