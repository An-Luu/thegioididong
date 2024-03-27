const Home = require('./homes')
const Check = require('./check')

function route(app) {
    app.use('/home', Home)
    app.use('/check', Check)
}

module.exports = route