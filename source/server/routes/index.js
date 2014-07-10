var express = require('express');
var router = express.Router();
var db = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res) {
    db.connect('mongodb://localhost:27017/harbinger', function (err, db) {
        if (err) { return console.dir(err); }

        // no callback, fire and forget
        db.collection('logs').find().toArray(function (err, l) {
            res.render('index', { logs: l });

            db.close();
        });
    });
});

module.exports = router;
