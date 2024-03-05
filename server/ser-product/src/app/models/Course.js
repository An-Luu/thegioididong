const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    type: { type: String, maxLength: 255 },
    descrition: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 600 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true },
    
});

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all', 
    deletedBy: true,
    deletedByType: String 
});

module.exports = mongoose.model('Course', Course);
