var express = require('express');

var appRouter = express.Router();

var net = require('net');

var router = function(nav, config) {
    appRouter.route('/')
        .get(function(req, res) {
            res.render('demo/index', {
                title: 'ShareChiWai',
                nav: nav,
                content: 'showHtmlCode'
            })
        });

    appRouter.route('/portchecker')
        .get(function(req, res) {


            var socket = new net.Socket();
            var host = req.query.host;
            var port = req.query.port;

            socket.connect("3306", "sharechiwai.com", function() {
                console.log('OPEN:' + s.address);
                // we don't destroy the socket cos we want to listen to data event
                // the socket will self-destruct in 2 secs cos of the timeout we set, so no worries
                socket.end();
                res.send("open ");
            });

            socket.on('error', function(e) {
                // silently catch all errors - assume the port is closed
                res.send(e);
                console.log("error: " + e);
                socket.destroy();
            });
        });

    appRouter.route('/nslookup')
        .get(function(req, res) {
            res.send("nslookup");
        });

    return appRouter;
}
module.exports = router;