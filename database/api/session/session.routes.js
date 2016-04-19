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

    res.header('Access-Control-Allow-Origin', '*');

    var newSession = SessionModel();
    var entryQueue = [];

    // Parse req JSON to array of objects
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      entryQueue.push(JSON.parse(req.body[i]));
    }

    // Persist each session entry onto DB
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

    // Persist session onto DB
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
