const passport =require("passport")
const Course = require('../../app/models/model')
const bcrypt = require('bcrypt')


class RegisterController{
    pace_register(req, res, next) {
        res.render("register")
        console.log(req.Course)
    }
    async register(req, res, next){
            try {
                const course = new Course(req.body)
                const checkEmail = Course.find({ email: course.email }) 
                const check = (await checkEmail).length   
                if(check > 0){
                    res.redirect('/register')
                }
                else{
                    let hashedPassword = await bcrypt.hash(req.body.password, 10)
                    course.password = hashedPassword    
                    course.save().then(() => res.redirect('/login'))
                }
            } catch (e) {
                console.log(e)
                res.redirect("/register")
            }
        }
}

module.exports = new RegisterController()
