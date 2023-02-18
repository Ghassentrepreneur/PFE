//MONGOOSE
const mongoose = require('mongoose');
//SCHEMA
const Schema = mongoose.Schema;
//MODEL
module.exports = mongoose.model('blogUsers',new Schema({
    fullName:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default: 'user'
    } 
}))