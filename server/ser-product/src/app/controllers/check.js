const Course = require('../models/Course')


class check {
    get(req, res, next) {   //find key search 
     const ip = req.query.name
     res.send(ip)
}}

module.exports = new check();