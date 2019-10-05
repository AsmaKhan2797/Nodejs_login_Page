const mongoose = require('mongoose');

console.log('Inside Userschema Validation');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password :{
        type: String,
        required : true
    },
    date :{
        type: Date,
        required : Date.now
    }
});

const  User =mongoose.model('User',userSchema);
module.exports= User;