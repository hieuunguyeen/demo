const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EntrySchema = new Schema({
  question : String,
  answer   : String,
  timestamp: {
    type   : Date,
    default: Date.now
  }
});

module.exports = mongoose.model('entry', EntrySchema);
