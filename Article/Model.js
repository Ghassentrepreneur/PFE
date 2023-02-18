//MONGOOSE
const mongoose = require('mongoose');
//SCHEMA
const Schema = mongoose.Schema;
//MODEL
module.exports = mongoose.model('articles',new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String, 
    },
    CreatedAt:{
        type:  Date
    }
}))