
const router = require('express').Router();

// const sequelize = 

const spotifyID = '1241218337';



// ! Get a User's Playlists
router.get('/user/:id/playlists', (req, res) => {
    // TODO: Set user ID to spotify model ID
    var apiUrl = 'https://api.spotify.com/v1/users/1241218337/playlists';

    fetch(apiUrl)
        .then(response => res.json(response))
        .then(data => console.log(data));
});

// ! Get a specific playlist
router.get('/playlists/:id', (req, res) => {
    // TODO: Set user ID to spotify model ID
    var apiUrl = 'https://api.spotify.com/v1/playlists/{playlist_id}';

    fetch(apiUrl)
        .then(response => res.json(response))
        .then(data => console.log(data));
});

// ! Get Spotify's featured playlists

router.get('/featured-playlists', (req, res) => {
    var apiUrl = 'https://api.spotify.com/v1/browse/featured-playlists';

    fetch(apiUrl)
        .then(response => res.json(response))
        .then(data => console.log(data));
});

module.exports = router;