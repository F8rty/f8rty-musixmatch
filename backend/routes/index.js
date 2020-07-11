var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
	res.status(404);
	res.send("Invalid Route");
});

module.exports = router;
