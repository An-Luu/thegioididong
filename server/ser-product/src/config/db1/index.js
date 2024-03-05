const mongoose = require('mongoose');

async function connect1() {
    try {
        await mongoose.connect('mongodb://localhost:27017/products');
        console.log('connect succesfuly ');
    } catch (error) {
        console.log('connect defaull');
    }
}

module.exports = { connect1 };
