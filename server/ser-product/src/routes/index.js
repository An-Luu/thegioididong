const Home = require('./homes')

function route(app) {
    app.use('/home', Home)
}

module.exports = route