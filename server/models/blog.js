const mongoose = require('mongoose');
const BlogSchema  = new mongoose.Schema({
    title :{
        type  : String,
    } ,
    author :{
        type  : String,
    } ,
    description :{
        type  : String,
    } ,
    date:{
        type: Date,
        default: Date.now,
    },
    id:{
        type:Number,
    }
    
},{collection : 'Blogs'});
const Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog;