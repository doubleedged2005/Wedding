/**
 * Created by Briana on 10/5/15.
 */
/**
 * Created by Briana on 10/4/15.
 */
var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Wedding');

router.get('/', function(req, res) {
    var collection = db.get('WeddingGuests');
    collection.find({}, function(err, WeddingGuests){
        if (err) throw err;
        res.json(WeddingGuests);
    });
});

router.post('/', function(req, res){
    var collection = db.get('WeddingGuests');
    collection.insert({
        name: req.body.name,
        email: req.body.email
    }, function(err, guest){
        if (err) throw err;

        res.json(guest);
    });
});

module.exports = router;