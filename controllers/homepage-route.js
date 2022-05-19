const router = require('express').Router();
const sequelize = require('../config/connection');



router.get('/', (req, res) => {
    // if(req.session){
    //     //TODO: Add Session to home routes for users to see different data if loggedIn(matt)
    //     res.render('#')
    // }else
    // {
        res.render('homepage')
    // }
});

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;