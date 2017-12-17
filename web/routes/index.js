const router = require('express').Router();
var path = require('path');

// routes loaded
router.get('/', (req, res) => {
  res.json({
    success: true,
    version: 'v1.0.0',
  });
});

router.get('/index', function(req, res) {
  res.sendFile(path.resolve('view/index.html'));
});


/**
 * Appends different routes to the
 * router and exports it.
 * @returns {object} express router instance
 */
module.exports = () => router;