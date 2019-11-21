const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/login.ejs', (req,res) => {
    res.render('login');
});

router.get('/calendar.ejs', (req,res) => {
    res.render('calendar');
});

router.get('/changePassword.ejs', (req,res) => {
    res.render('changePassword');
});

router.get('/index.ejs', (req,res) => {
    res.render('index');
});

router.get('/register.ejs', (req,res) => {
    res.render('register');
});

router.get('/accounts.ejs', (req,res) => {
    res.render('accounts');
});

module.exports = router;
