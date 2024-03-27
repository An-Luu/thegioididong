const passport =require("passport")


class LoginController{
    login(req, res, next) {
        return res.status(200).send({
            data: false
         })
     }
}

module.exports = new LoginController()