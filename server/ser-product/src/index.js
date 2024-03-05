const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors')
const app = express();
const port = 3002;
const methodOverride = require('method-override');
const db1 = require('./config/db1/index');
const route1 = require('./routes');



//connect db
db1.connect1()


//Add public file
app.use(express.static(path.join(__dirname, 'public')));

// get method post
app.use(express.urlencoded());
app.use(express.json());
app.use(cors())
app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route1(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});