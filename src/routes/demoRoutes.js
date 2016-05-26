var express = require('express');

var demoRouter = express.Router();

var router = function(nav, config) {

  demoRouter.route('/')
    .get(function(req, res) {
      res.render('demo/index', {
        title: 'ShareChiWai',
        nav: nav,
        content: 'showHtmlCode'
      });
    });

    demoRouter.route('/encodDecodeHtml')
      .get(function(req, res) {
        res.render('demo/index', {
          title: 'ShareChiWai',
          nav: nav,
          content: 'encodeDecodeHtml'
        });
      });

  demoRouter.route('/ref')
    .get(function(req, res) {
      res.render('demo/index', {
        title: 'ShareChiWai',
        nav: nav,
        content: 'contact'
      });
    });


  return demoRouter;
};
module.exports = router;
