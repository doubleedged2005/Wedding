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
        html: '<html> Hello ' + req.body.name + '!<br><br> We have you down for ' + req.body.numOfGuestsOver13 + ' adults and ' + req.body.numOfGuestsUnder13 + " children. <br>Just in case we are lucky enough that you will be joining us, we have included some vital information in this email. <br><br>If you need to change your RSVP, please contact us at chris.briana.2016@gmail.com.<br><br>The ceremony will be at 6:00pm at <a href='https://www.google.com/maps/place/Californos/@39.0514736,-94.5935903,17z/data=!3m1!4b1!4m2!3m1!1s0x87c0efc505a508b5:0xb16260953af898b5'>Californos in Westport.</a> The reception will be held immediately after. <br><br>If you are interested in booking a hotel, we have a block of rooms at <a href='http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Swift%20Williams%20Wedding%5Emciac%60SWWSWWA%7CSWWSWWB%60139%60USD%60false%604%607/22/16%607/24/16%606/22/16&app=resvlink&stop_mobi=yes'>The AC Marriot</a>, walking distance from the venue and located in Westport.<br><br>Please contact us with any questions or concerns. We hope we see you on July 23rd, 2016 to celebrate with us!<br><br>With love,<br>Briana & Chris</html>",
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