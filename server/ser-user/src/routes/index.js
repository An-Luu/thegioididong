const LoginController = require('./login')
const RegisterController = require('./register')
const UserController = require('./user')
const LogoutController = require('./logout')
const passport = require('passport')
const express = require("express")
const { checkAuthenticated, checkNotAuthenticated } = require('../config/tool/checkauthenticated')


function route(app){
  app.use('/', UserController)
  app.use("/register", RegisterController)
  app.use('/login', LoginController)
  app.post('/login', passport.authenticate('local',{
        failureRedirect: '/login',
        failureFlash: true
      }),
      checkAuthenticated,
      function(req, res) {
          // res.redirect('/sus/' + req.body.name);    
          return res.status(200).send({
            data: true
         })
      });
  app.use('/logout', LogoutController)
}

module.exports = route