/*
 * Module dependencies
 */
/*global __dirname console module require*/
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
  { src: __dirname + '/public', compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  );
});

app.get('/jokes/young_monk', function (req, res) {
  res.render('jokes/young_monk',
  { title : 'Young Monk' }
  );
});

app.get('/jokes/index', function (req, res) {
  res.render('jokes/index',
  { title : 'Jokes Index' }
  );
});

app.get('/jokes/is_hell_exothermic_or_endothermic', function (req, res) {
  res.render('jokes/is_hell_exothermic_or_endothermic',
  { title : 'Is hell exothermic or endothermic' }
  );
});

app.listen(3000);
