const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.json())

let db;

MongoClient.connect('mongodb://*******@ds129013.mlab.com:29013/lighthousebyq', (err, database) => {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3001, function() {
    console.log('you are not safe on 3001');
  });
});

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 res.setHeader('Accept', 'application/json')
 next();
});

app.get('/', (req, res) => {
  db.collection('Feedback').find().toArray(function(err, results) {
    res.send(results)
  });
});

app.post('/feedback', (req, res) => {
  db.collection('Feedback').save(req.body, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('saved to database', req.body),
  res.send(req.body)
  });
});
