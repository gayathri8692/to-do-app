const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

/* Importing routes */
const todoRoutes = require('./routes/todo');

/* telling the app what port to listen on */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting the view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up logging */
app.use(logger('dev'));
/* setting up body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


/* first route*/
app.get('/', function(req, res) {
  res.render('index', {
    message: 'WELCOME TO SKY NOTES APP',
    documentTitle: 'Sky notes app',
  });
});

/* Creating the route */
app.use('/todo', todoRoutes);


/* handling errors */
app.get('*', function(req, res) {
  res.status(404).send({message: 'not found!'});
});