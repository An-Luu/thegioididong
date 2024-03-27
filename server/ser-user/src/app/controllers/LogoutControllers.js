
class LogoutController{
    logout(req, res, next) {
        req.logout(req.query, err => {
            if (err) return next(err)
            res.redirect("/")
        })
}}

module.exports = new LogoutController()