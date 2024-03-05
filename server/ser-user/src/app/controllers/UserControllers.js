const passport =require("passport")
const Course = require('../../app/models/model')


class UserController{
    user(req, res, next) {
        res.send(req.query.email)
        // Course.find({ email: req.query.email })
        //    .then(course => res.send(course))
    }
}

module.exports = new UserController()
