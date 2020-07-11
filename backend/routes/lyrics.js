var express = require('express');
var router = express.Router();
var db = require('../models');

// GET /api/lyrics
router.get('/', function (req, res, next) {
	db.Lyric.findAll()
		.then(result => res.json(result))
		.catch(err => {
			res.status(500).json({
				"error": err.message
			});
		});
});

// GET /api/lyrics/{song_id}
router.get('/:id', function (req, res, next) {
	db.Lyric.findAll({
		where: {
			song_id: req.params.id
		}
	}).then(
		result => res.json(result)
	).catch(err => {
		res.status(500).json({
			"error": err.message
		});
	});
});

module.exports = router;
