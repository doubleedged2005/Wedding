/**
 * Created by Briana on 10/5/15.
 */
var express = require('express');
var router = express.Router();

var monk = require('monk');
//var db = monk('localhost:27017/Wedding');
var db = monk(process.env.dbuser+":"+process.env.password+"@"+process.env.dbhost);

router.get('/', function(req, res) {
    var collection = db.get('WeddingGuests');
    collection.find({}, function(err, WeddingGuests){
        if (err) console.log(err);
        res.json(WeddingGuests);
    });
});

router.post('/', function(req, res){
    var collection = db.get('WeddingGuests');
    collection.insert({
        name: req.body.name,
        email: req.body.email,
        rsvp: req.body.rsvpRadio,
        numOfGuestsOver13: req.body.numOfGuestsOver13,
        numOfGuestsUnder13: req.body.numOfGuestsUnder13
    }, function(err, guest){
        if (err) console.log(err);

        res.json(guest);
        console.log("success");
    });
});

module.exports = router;