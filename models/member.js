const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    title : {type :String},
    firstName : {type :String},
    lastName : {type:String},
    gender:{type:String},
    msisdn : {type:String},
    expectedSalary: {type:String},


});

module.exports = mongoose.model('Member',memberSchema)