/**
 * Created by Briana on 10/5/15.
 */
var express = require('express');
var router = express.Router();

var monk = require('monk');
//var db = monk('localhost:27017/Wedding');
var db = monk(process.env.dbuser+":"+process.env.password+"@"+process.env.dbhost);
var api_key = 'key-cf9926b43bf3d262f133055b0f18693d';
var domain = 'swiftwilliamswedding.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});






router.get('/', function(req, res) {
    var collection = db.get('WeddingGuests');
    collection.find({}, function(err, WeddingGuests){
        if (err) console.log(err);
        res.json(WeddingGuests);
    });
});

router.post('/', function(req, res){
    var collection = db.get('WeddingGuests');
    var data = {
        from: 'Briana & Chris <info@swiftwilliamswedding.com>',
        to: req.body.email,
        bcc: '<chris.briana.2016@gmail.com>',
        subject: 'We got your RSVP!',
        text: 'We have you down for ' + req.body.numOfGuestsOver13 + 'adults and ' + req.body.numOfGuestsUnder13 + 'children.',
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
    collection.insert({
        name: req.body.name,
        email: req.body.email,
        rsvp: req.body.rsvpRadio,
        numOfGuestsOver13: req.body.numOfGuestsOver13,
        numOfGuestsUnder13: req.body.numOfGuestsUnder13,
        favSong: req.body.favSong
    }, function(err, guest){
        if (err) console.log(err);

        res.json(guest);
        console.log("success");
    });
});

module.exports = router;