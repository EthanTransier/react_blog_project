const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan');
const passport = require('passport');
require("./config/passport")(passport);
require("dotenv").config();
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
const path = require('path');

try{
    mongoose.connect(process.env.MONGO_URI, {useNewURLParser:true, useUnifiedTopology:true})//directly connects
   .then(()=> {console.log(`connect on port: ${process.env.PORT}`)})
   .catch((err)=>{console.log(err)})
}catch(e){
    console.log(e)
}

app.use(morgan('tiny'))

app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('sucess message');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next()
})