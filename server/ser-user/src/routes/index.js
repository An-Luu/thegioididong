const LoginController = require('./login')
const RegisterController = require('./register')
const UserController = require('./user')
const passport = require('passport')
const express = require("express")


function route(app){
  app.use('/', UserController)
  app.use("/register", RegisterController)
  app.use('/login', LoginController)
  app.post('/login', passport.authenticate('local',{
        failureRedirect: '/login',
        successRedirect: '/',
        failureFlash: true
      }));
}

module.exports = route