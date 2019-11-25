const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const multer = require('multer');

//connecting database
mongoose.connect('mongodb://localhost/reserva')
 .then(db => console.log('DB connected'))
 .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');


//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes
app.use('/',indexRoutes);

//static files
app.use('/public', express.static(path.join(__dirname, 'public')));



//errorhandles



app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})
