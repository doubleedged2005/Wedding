/**
 * Created by Briana on 12/26/15.
 */
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



router.post('/john', function(req, res){
    var data = {
        from: 'Briana & Chris <info@swiftwilliamswedding.com>',
        to: req.body.email,
        bcc: '<chris.briana.2016@gmail.com>',
        subject: "John's Apartment Finder",
        html: '<html> Hello John! <br><br> You just visited ' + req.body.location + ". Here's the rest of the information you gathered: <br><li><ul>Cost<li><ul>Rent: " +req.body.costRent + "</ul><ul>Utilities: " + req.body.costUtil + "</ul><ul>Average utility cost for building: " + req.body.costUtilAvg + "</ul></li><li>Amenineties<ul><Parking: " + req.body.park +"</ul><ul><Internet speed and cost: " + req.body.internet +"</ul><ul><Security: " + req.body.security +"</ul><ul><Laundry: " + req.body.laundry +"</ul></li><li>Culture<ul><Noise: " + req.body.noise +"</ul><ul><Crime: " + req.body.crime +"</ul><ul><Maintenance: " + req.body.maint +"</ul><ul><Inspections: " + req.body.inspect +"</ul></li></ul></html>",
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
});

module.exports = router;