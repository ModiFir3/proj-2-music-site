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
    Song.create({
        song_name: req.body.song_name,
        artist: req.body.artist,
        embed_song: req.body.embed_song,
        playlist_id: req.body.playlist_id
    })
        .then(dbSongData => res.json(dbSongData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.delete('/:id', (req, res) => {
    Song.destroy({
        where: {
            id: req.params.id
        },
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
})

module.exports = router;