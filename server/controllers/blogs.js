const Blog = require('../models/blog.js');

const getblogs = async (req, res) => {
  try {
    console.log(`Blogs: ${Blog}`)
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createblog = async(req, res)=>{
    const {title, author, description} = req.body;
    let errors = []
    let id = await Blog.find({})
    // console.log(await Blog.find({}).length >= 0)
    console.log(id.length+1)
    console.log(title, author, description)
    if(!title || !author || !description){
        errors.push({msg: "Please fill in all fields"})
    }

    if(errors.length > 0){
        console.log('errors ' + errors)
        res.status(500).json({ error: error.message });
    } else {
        const newBlog = new Blog({
            title: title,
            author: author,
            description: description,
            id: id.length+1
        })
        newBlog.save()
    }
    res.redirect('/')

}

module.exports = {getblogs, createblog}