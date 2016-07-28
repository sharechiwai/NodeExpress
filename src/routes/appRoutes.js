var express = require('express');

var appRouter = express.Router();

var router = function(nav, config) {

    appRouter.route('/')
        .get(function(req, res) {
            res.render('demo/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'showHtmlCode'
            });
        });

    appRouter.route('/networktools')
        .get(function(req, res) {
            res.render('demo/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'encodeDecodeHtml'
            });
        });

    appRouter.route('/ref')
        .get(function(req, res) {
            res.render('demo/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'contact'
            });
        });

    return appRouter;
};
module.exports = router;