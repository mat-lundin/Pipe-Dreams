const router = require('express').Router();
const withAuth = require('../utils/auth');
const path = require('path')
// const { Message, User } = require('../models');
// const UserHistory = require(../models/User_history);

// homepage route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../index.html'));
});

router.get('/loginSignUp', (req, res) => {
    res.sendFile(path.join(__dirname,'../loginorsignup.html'));
});
// sign-up route
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'../sign-up.html'));
});

// login route
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'../login.html'));
});

// chat route - sends logged in user to chat, others to signup/login
// router.get('/chat', (req, res) => {
//     if (req.session.logged_in) {
//         res.sendFile(__dirname + '/chat.html');
//         return;
//     } else {
//         res.redirect('/userpage.html');
//     }
// });

// sends logged in user to mapbox
// sends other users to login or sign up page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/mapbox.html');
        return;
    } else {
        res.sendFile(__dirname + '/userpage.html');
    }
});

// allows access to mapbox if signed in already
router.get('/mapbox', withAuth, (req, res) => {
    res.sendFile(path.join(__dirname,'../mapbox.html'));
});

// redirects mapbox access to login or signup if not logged in
router.get('/mapbox', (req, res) => {
    res.sendFile(__dirname + '/userpage.html');
});



module.exports = router;


