const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  timestamp: {
    type   : Date,
    default: Date.now
  },
  clientIp : {
    type   : String
  },
  deviceId : {
    type   : String
  },
  data: [{
    type: Schema.ObjectId,
    ref: 'entry'
  }]
});

module.exports = mongoose.model('session', SessionSchema);
