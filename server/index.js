const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const login = require('./middleware/login.js');
const passportSetup = require('./config/passportSetup.js');
const isAuthenticated = require('./middleware/auth.js');
const path = require('path');
const users = require('./routes/userController.js')
dotenv.config();
mongoose.connect('mongodb+srv://dummy:RluJNoNqZgMuZufj@users.grndgyl.mongodb.net/users');
passportSetup(passport)

const app = express();
app.use(session({secret: "murphy is the most amazing person ever", resave: false, saveUninitialized: true,}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false, limit: 100000, parameterLimit: 20}))

app.route('/').get((req, res) =>{
    res.status(200).json({success: true});
});
app.post("/login", login);
app.use('/blogs', require('./routes/blogController.js'))
app.use('/users', require('./routes/userController.js'))
// app.route('/').get((req, res) =>{
//     // Import your mongoose model
// }).post((req, res) =>{
//     // Used for creating docs
//     // const {id} = req.body;
//     // var doc = new Model({id: id});
//     // doc.save();
// }).put((req, res) =>{
//     // Used for updating docs
//     // const {id, name} = req.body;
//     // var doc = Model.findOneAndUpdate({id: id}, {$set: {name: name}}, {new: true});
// });

app.listen(5000);