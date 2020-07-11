var express = require('express');
var router = express.Router();
var db = require('../models');

// GET /api/songs
router.get('/', function (req, res, next) {
	db.Song.findAll().then(result => res.json(result));
});

// GET /api/songs/{song_id}
router.get('/:id', function (req, res, next) {
	db.Song.findByPk(req.params.id).then(result => res.json(result));
});

module.exports = router;