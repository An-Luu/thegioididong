const passport =require("passport")


class LoginController{
    login(req, res, next) {
        
        res.send(req.query.name)
     }
}

module.exports = new LoginController()