const router = require('express').Router();

const playlistRoutes = require('./playlist-route');
const userRoutes = require('./user-routes');
// const commentRoutes = require('');

router.use('/playlists', playlistRoutes);
router.use('/user', userRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;