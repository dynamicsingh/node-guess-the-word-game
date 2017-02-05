//Import Packages
var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs'); //To use files on the server
require('babel-register');
var search=require('./lib/words'); //To identify words

const app = express();

//Reading our JSON Dictionary file present in lib folder
const dictionary = JSON.parse(
  fs.readFileSync('./lib/dictionary.json')
).dictionary;

//tempelating engine
app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/public', express.static('public')); //use static public folder in place of /public

//To parse json from http url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Our home file
app.get('/', function(req, res) {
  res.render('index', { pattern: null });
});

//POST- all searches comes here for their matches 
app.post('/search', function (req, res) {
  var items=search(req.body.pattern, dictionary).result;
var item = items[Math.floor(Math.random()*items.length)];
  res.render('result', {
    word: item,
    pattern: req.body.pattern
  });
});

//Asisign PORT
app.listen(process.env.PORT || 3000);

console.log('Listening on port: ' + (process.env.PORT || 3000));