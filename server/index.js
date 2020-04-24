const express = require('express');
const app = express();
const Bug = require('./db/queries');
const exData = require('../src/example-data/exampleData');

app.get('/', (req, res) => {
  Bug.deleteMany({}, function(err) {
    Bug.insertMany(exData, function(err, docs) {
        res.send(docs);
        console.log(err, 'success');
    });
  });
});

// const bugList = (
// app.get('/', (req, res) => {
// Bug.find({}, function(err, arr) {});
// }));


app.post('/', (req, res) => {
  res.send('bug: ', bug);
});

app.listen('3000', () => {
  console.log('Listening on port 3000');
});

// module.exports = bugList;