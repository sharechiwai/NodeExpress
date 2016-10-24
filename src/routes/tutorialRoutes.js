var express = require('express');
var dotenv = require('dotenv');
dotenv.load();

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
                content: 'environment_variable',
                variable: process.env.var1
            });
        });

    return tutorialRouter;
};
module.exports = router;