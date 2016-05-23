var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var config = require('./config/config');
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];

// set up route
var bookRouter = require('./src/routes/bookRoutes')(nav);
var homeRouter = require('./src/routes/homeRoutes')(nav);

app.use(express.static('static'));
app.set('views', './src/views');

// define the view engine
app.set('view engine', 'ejs');


app.get('/test', function(req, res) {
    res.send(config.helloworld);
});


app.use('/Books', bookRouter);
app.use('/', homeRouter);




app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
