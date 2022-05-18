const router = require('express').Router();
const sequelize = require('../config/connection');

//TODO: Add Session to home routes for users to see different data if loggedIn(matt)

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;