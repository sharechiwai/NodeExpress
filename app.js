var express = require('express');

// Body Parser need to declare on app.js,
// tried to declare on the route and it does not work
var bodyParser = require('body-parser');
var app = express();
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
var port = process.env.PORT || 3000;

var config = '';
// using try and catch blog to solve the local config issue
try {
  config = require('./config/config');
} catch (err) {
  config = require('./config/config-sample');
}
var nav = [{
  Link: '/Books',
  Text: 'Book'
}, {
  Link: '/Authors',
  Text: 'Author'
}];

// set up route
var bookRouter = require('./src/routes/bookRoutes')(nav);
var demoRouter = require('./src/routes/demoRoutes')(nav, config);
var homeRouter = require('./src/routes/homeRoutes')(nav, config);

app.use(express.static('static'));
app.set('views', './src/views');

// define the view engine
app.set('view engine', 'ejs');

// bodayParser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/test', function(req, res) {
  res.send(config.helloworld);
});

app.use('/Demo', demoRouter);
app.use('/Books', bookRouter);
app.use('/', homeRouter);

app.listen(port, function(err) {
  console.log('running server on port ' + port);
});
