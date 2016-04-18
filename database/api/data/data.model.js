const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dataSchema = new schema({
  question : String,
  answer   : String,
  timestamp: {
    type   : Date,
    default: Date.now
  }
});
