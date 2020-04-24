const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('We\'re connected!');
});

const bugSchema = new mongoose.Schema({
  bugName: String,
  bugDescription: String,
  reportedBy: String,
  createdDate: String,
  assignedTo: String,
  threatLevel: String
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;

// 8yrwmNzJwWuFNS9P