var express = require('express');

var app = express();

var request = require('request');
// use path module to get the root path
var homeRouter = express.Router();

var router = function (nav, config) {
    var sendgrid = require('sendgrid')(config.SEND_GRID_API_KEY);
    homeRouter.route('/')
        .get(function (req, res) {
            res.render('home/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'home'
            });
        });

    homeRouter.route('/contact')
        .get(function (req, res) {
            res.render('home/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'contact'
            });
        })
    homeRouter.route('/speech')
        .get(function (req, res) {
            res.render('home/index1', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'speech'
            });
        })
         homeRouter.route('/housing')
        .get(function (req, res) {
            res.render('home/index_clean', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'housing'
            });
        })
    homeRouter.route('/curl')
        .get(function (req, res) {
            var url = req.query.url;

            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log('request url: ' + url);

                    res.send(body);
                }
            })

        })

    homeRouter.route('/contactSent')
        .post(function (req, res) {
            //    var email = new sendgrid.Email()
            console.log('testing');
            console.log(req.body.email);
            console.log('end');
            //  var contact = req.body.contact
            // :/contact:/email:/subject:/content
            /*
            email.addTo(config.CONTACT_EMAIL_TO)
            email.setFrom(config.CONTACT_EMAIL_FROM )
            email.setSubject('Sending with SendGrid is Fun')
            email.setHtml('and easy to do anywhere, even with Node.js')

            sendgrid.send(email);*/
            res.send(req.body.length);
        })
    /*
      homeRouter.route('/:id')
        .get(function(req, res) {
          var id = req.params.id
          res.render('bookView', {
            title: 'Books',
            nav: nav,
            content: 'samplecontent'
          })
        })
    */
    return homeRouter;
}
module.exports = router;