const passport =require("passport")


class UserController{
    user(req, res, next) {
        return res.status(200).send({
            data: true
         })
    }
}

module.exports = new UserController()
