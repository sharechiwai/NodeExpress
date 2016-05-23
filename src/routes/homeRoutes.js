var express = require('express');
var sendgrid = require("sendgrid")('');
var homeRouter = express.Router();


var router = function(nav) {

  homeRouter.route('/')
    .get(function(req, res) {
      res.render('home/index', {
        title: 'ShareChiWai',
        nav: nav,
        content: 'home'
      });
    });

  homeRouter.route('/contact')
    .get(function(req, res) {
      res.render('home/index', {
        title: 'ShareChiWai',
        nav: nav,
        content: 'contact'
      });
    });
  homeRouter.route('/contactSent')
    .get(function(req, res) {
      var email = new sendgrid.Email();

      email.addTo("To");
      email.setFrom("from");
      email.setSubject("Sending with SendGrid is Fun");
      email.setHtml("and easy to do anywhere, even with Node.js");

      sendgrid.send(email);
      res.send("Sent");
    });
/*
  homeRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      res.render('bookView', {
        title: 'Books',
        nav: nav,
        content: 'samplecontent'
      });
    });
*/
  return homeRouter;
};
module.exports = router;
