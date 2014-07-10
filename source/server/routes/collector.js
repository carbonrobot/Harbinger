var express = require('express');
var router = express.Router();
var db = require('mongodb').MongoClient;

/* POST message */
router.post('/:type', function (req, res) {

    db.connect('mongodb://localhost:27017/harbinger', function (err, db) {
        if (err) { return console.dir(err); }

        // no callback, fire and forget
        db.collection('logs').insert({
            created: +Date.now(),
            type: req.params.type,
            app: req.body.app,
            machine: req.body.machine,
            message: req.body.message
        }, { w: 0 });

        db.close();
    });

    res.send(200);
});

module.exports = router;
