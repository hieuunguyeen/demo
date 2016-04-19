/**
 * POST       /api/session       -> create
 */

// Dependencies
const _ = require('lodash');

// Const
const baseUrl = '/api';

// Mongoose model
const SessionModel = require('./session.model');
const EntryModel   = require('../entry/entry.model');

module.exports = function(app) {
  /**
   * POST
   */
  app.post(baseUrl + '/session', (req, res) => {
    var newSession = SessionModel();
    var entryQueue = req.body; // Get JSON from request
    console.log('Request length: 'entryQueue.length);

    for (var i = 0; i < entryQueue.length; i++) {
      var newEntry = new EntryModel();
      newEntry.question = entryQueue[i].question;
      newEntry.answer = entryQueue[i].answer;

      newEntry.save((err) => {
        if (err) {
          res.send(err);
        }
      });

      newSession.data.push(newEntry._id);
    }
    newSession.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({
        'message': 'success'
      });
    });
  });
}
