const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
    title :{
        type  : String,
        required : true
    } ,
    content :{
        type  : String,
        required : true
    } ,
    author :{
        type  : String,
        required : true
    } ,
    date :{
        type : Date,
        default : Date.now
    },
    image: {
        type: String,
        required: true,
        default: './images/default.png'
    }
},{collection : 'Users'});
const User= mongoose.model('User',UserSchema);

module.exports = User;