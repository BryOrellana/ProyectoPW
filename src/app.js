const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
var usersRouter = require('./routes/users');
const multer = require('multer');
const session = require('express-session');
const passport = require('passport');

//connecting database

mongoose.connect('mongodb://localhost/reserva')
.then(db => console.log('DB connected'))
.catch(err => console.log(err));
//importing routes
const indexRoutes = require('./routes/index');
require('../config/passport');


//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecretapp',
    resave : true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/',indexRoutes);
app.use('/users', usersRouter);

//static files
app.use('/public', express.static(path.join(__dirname, 'public')));



//errorhandles



app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})
