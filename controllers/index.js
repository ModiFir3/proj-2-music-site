const router = require('express').Router()

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-route');
const playlistRoutes = require('./playlist-routes')

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/playlists', playlistRoutes);

module.exports = router;