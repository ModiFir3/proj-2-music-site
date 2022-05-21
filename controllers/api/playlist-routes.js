const router = require('express').Router();
const { Comment, Playlist, Song, User } = require('../../models');

router.get('/', (req, res) => {
    Playlist.findAll({
        attributes: [
            'id',
            'playlist_name',
            'author',
            'embed_playlist',
        ],
    })
        .then(dbPlaylistData => res.json(dbPlaylistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Playlist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'playlist_name',
            'author',
            'embed_playlist',
        ],
        include: [
            {
                model: Song,
                attributes: [
                    'id',
                    'song_name',
                    'artist',
                    'embed_song',
                    'playlist_id'
                ]
            }
        ]
    })
        .then(dbPlaylistData => {
            if (!dbPlaylistData) {
                res.status(404).json({ message: 'No playlist found with this id' });
                return;
            }
            res.json(dbPlaylistData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Playlist.create({
        playlist_name: req.body.playlist_name,
        author: req.body.author,
        embed_playlist: req.body.embed_playlist
    })
        .then(dbPlaylistData => res.json(dbPlaylistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Playlist.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPlaylistData => {
            if (!dbPlaylistData) {
                res.status(400).json({ message: 'No playlist found with this id' });
                return;
            }
            res.json(dbPlaylistData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;