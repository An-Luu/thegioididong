if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require('express')
const port = 3003
const path = require('path');
const app = express() 
const initializePassport = require("./config/tool/passport-config")
const passport = require('passport')
const flash = require("express-flash")
const session = require("express-session")
const cors = require('cors');
const morgan = require('morgan')
const db = require('./config/db/db')
const route = require('./routes/index')
const methodOverride = require('method-override');


db.connect()

app.use(express.json());
app.use(cors())

initializePassport()

app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(methodOverride('_method'));

app.use(morgan('combined'));

app.use(passport.initialize())
app.use(passport.session())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


