//MONGOOSE
const mongoose = require('mongoose');
//SCHEMA
const Schema = mongoose.Schema;
//MODEL
module.exports = mongoose.model('comments',new Schema({
    comment:{
        type:String,
        required:true
    },
    articleID:{
        type:String,
        required:true  
    }
    ,
    userID:{
        type:String,
        required:true
    },
    userImg:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
}))