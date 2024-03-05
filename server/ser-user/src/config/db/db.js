const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/users');
        console.log('connect succesfuly');
    } catch (error) {
        console.log('connect defaull');
    }
}

module.exports = { connect };
