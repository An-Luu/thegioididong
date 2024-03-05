module.exports = {
    mutipleMongooseToObject: function (mgToObject) {
        return mgToObject.map((mgToObject) => mgToObject.toObject());
    },
    mongooseToObject: function (mongodb) {
        return mongodb ? mongodb.toObject() : mongodb;
    },
};