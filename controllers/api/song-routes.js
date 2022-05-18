const router = require('express').Router();
const { Comment, Playlist, Song, User } = require('../../models')

router.get('/', (req, res) => {
    Song.findAll({
        attributes: [
            'id',
            'song_name',
            'artist',
            'embed_song',
            'playlist_id'
        ]
    })
        .then(dbSongData => res.json(dbSongData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Song.findOne({
        attributes: [
            'id',
            'song_name',
            'artist',
            'embed_song',
            'playlist_id'
        ]
    })
        .then(dbSongData => res.json(dbSongData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

//future dev: create playlist
router.post('/', (req, res) => {
    Song.create()
})

module.exports = router;