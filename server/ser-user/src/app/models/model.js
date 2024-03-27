const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const bcrypt = require('bcrypt');
const { type } = require('os');
const { isStringObject } = require('util/types');


const Schema = mongoose.Schema;

const Course = new Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String },
    admin: { type: Boolean},
    email: { type: String },
    descrition: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 600 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true },
    
});

Course.statics = {
    findByEmail(email) {
      return this.findOne({email: email});
    }
  }
  
Course.methods = {
    comparePassword(password) {
      return bcrypt.compare(password, this.password);
    }
}

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all', 
    deletedBy: true,
    deletedByType: String 
});

module.exports = mongoose.model('Course', Course);
