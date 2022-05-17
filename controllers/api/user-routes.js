const router = require('express').Router();

// const Spotify = require('../../models/Spotify');

// var spotifyID = Spotify.Id;

// TODO: Switch GET to GET if applies

// ! Get Users Profile
router.get('/user', (req, res) => {
    var apiURl = 'https://api.spotify.com/v1/users/1241218337';

    fetch(apiURl)
        .then(response => res.json(response))
        .then(data => console.log(data));
});





module.exports = router;