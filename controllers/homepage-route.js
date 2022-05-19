const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Playlist, Song, User } = require('../models')



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

router.get('/playlists', (req, res) => {
    Playlist.findAll({
        attributes: [
            'id',
            'playlist_name',
            'author',
            'embed_playlist',
        ],
    })
        .then(dbPlaylistData => {
            // res.render('playlist', dbPlaylistData[0].get({ plain: true }));

            const playlists = dbPlaylistData.map(playlist => playlist.get({ plain: true }));

            res.render('playlist', {
                playlists
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;