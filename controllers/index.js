const router = require('express').Router()

const apiRoutes = require('./api');
const loginRoutes = require('./login-routes');

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;