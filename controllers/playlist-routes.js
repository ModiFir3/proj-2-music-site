const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Playlist, Song, User } = require('../models')

router.get('/playlists/:id', (req, res) => {
    Playlist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'playlist_name',
            'author',
            'embed_playlist',
        ]
    })
        .then(dbPlaylistData => {

            const playlists = dbPlaylistData.map(playlist => playlist.get({ plain: true }));

            res.render('single-playlist', {
                playlists
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;