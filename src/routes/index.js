const express = require('express');
const router = express.Router();

const User = require('../models/user');

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

module.exports = router;