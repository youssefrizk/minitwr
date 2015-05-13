var express = require('express');
var router = express.Router();
var tweets = [];

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'TweetRise', tweets: tweets });
});

router.post('/', function(req, res, next) {
	tweets.unshift(req.body.tweet);
	res.redirect('/index');
});

module.exports = router;
