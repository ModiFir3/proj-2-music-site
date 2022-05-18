const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const playlistRoutes = require('./playlist-routes');
const songRoutes = require('./song-routes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/playlists', playlistRoutes);
router.use('/songs', songRoutes);

module.exports = router;