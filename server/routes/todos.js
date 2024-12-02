var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function (req, res, next) {
    res.send('List of todos');
});

module.exports = router;
