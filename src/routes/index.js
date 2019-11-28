const express = require('express');
const router = express.Router();

const User = require('../models/user');
const msge = require("../models/mensaje")

router.get('/', async (req,res) => {
    const users = await User.find();
    console.log(users);
    res.render('index');
});

router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/calendar', (req,res) => {
    res.render('calendar');
});

router.get('/changePassword', (req,res) => {
    res.render('changePassword');
});

router.get('/reserva', (req,res) => {
    res.render('reserva');
});
/*
router.get('/index', async (req,res) => {
    res.render('index');
});
*/
router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/accounts', (req,res) => {
    res.render('accounts');
});

/*mostrar datos
    
router.get('/accounts', async (req,res) => {
    const users = await User.find();
    console.log(users);
    res.render('accounts');
});
*/

router.post('/addUser', async (req,res) =>{
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

router.post('/addMsg', async (req,res) =>{
    const mesg = new msge(req.body);
    await mesg.save();
    res.redirect('/');
});

router.get('/display', function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.render('display', { users: users });
            console.log(users);
        }
    });
});

router.get('/message', function(req, res) {
    msge.find(function(err, mesag) {
        if (err) {
            console.log(err);
        } else {
            res.render('mensajes', { mesag: mesag });
            console.log(mesag);
        }
    });
});

router.get('/delete/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function (err, project) {
      if (err) {
      
      res.redirect('../display');
      } else {
        
        res.redirect('../display');
      }
    });
  });

  router.get('/edit/:id', function(req, res) {
    console.log(req.params.id);
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);

            res.render('edit', { userDetail: user });
        }
    });
});

  router.post('/edit/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {
            res.redirect('edit/' + req.params.id);
        } else {
            res.redirect('../display');
        }
    });
});

module.exports = router;