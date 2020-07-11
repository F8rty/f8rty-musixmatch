var express = require('express');
var router = express.Router();
var db = require('../models');

// GET /api/songs
router.get('/', function (req, res, next) {
	db.Song.findAll()
		.then(result => res.json(result))
		.catch(err => {
			res.status(500).json({
				"error": err.message
			});
		});
});

// GET /api/songs/{song_id}
router.get('/:id', function (req, res, next) {
	db.Song.findByPk(req.params.id).
	then(result => res.json(result))
	.catch(err => {
		res.status(500).json({
			"error": err.message
		});
	});
});

module.exports = router;