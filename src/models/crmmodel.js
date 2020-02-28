var mongoose = require('mongoose');
var schema = mongoose.Schema;

var blogSchema = new schema({
        title: String,
        author: String,
        body: String,
});

var memberSchema = new schema({
        name : String,
        stateCode : String,
        gender : String,
        stateOfOrigin : String,
        age : Number
    });

module.exports = { blogSchema, memberSchema };

