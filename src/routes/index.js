const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
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

router.get('/index', (req,res) => {
    res.render('index');
});

router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/accounts', (req,res) => {
    res.render('accounts');
});

module.exports = router;
