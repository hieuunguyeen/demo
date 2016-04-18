const mongoose = require('mongoose');
const schema = mongoose.Schema;

const SessionSchema = new schema({
  timestamp: {
    type   : Date,
    default: Date.now
  },
  clientIp : {
    type   : String
  },
  deviceId : {
    type   : String
  }
});

module.exports = mongoose.model('session', SessionSchema);
