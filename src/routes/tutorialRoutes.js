var express = require('express');

var tutorialRouter = express.Router();

var router = function(nav, config) {

    tutorialRouter.route('/')
        .get(function(req, res) {
            res.render('tutorial/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'home'
            });
        });

    tutorialRouter.route('/env')
        .get(function(req, res) {
            res.render('tutorial/index', {
                title: 'ShareChiWai Tutorial',
                nav: nav,
                content: 'enviroment_variable'
            });
        });


    return tutorialRouter;
};
module.exports = router;