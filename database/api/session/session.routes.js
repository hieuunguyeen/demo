/**
 * POST       /api/session       -> create
 */

const _ = require('lodash');

module.exports = function(app) {
  const baseUrl = '/api';
  const SessionModel = require('./session.model');
  const EntryModel = require('../entry/entry.model');


  /**
   * POST
   */

  app.post(baseUrl + '/session', (req, res) => {
    var newSession = SessionModel();
    var entryArray = req.body; // Get JSON from request
    console.log(entryArray.length);

    for (var i = 0; i < entryArray.length; i++) {
      var newEntry = new EntryModel();
      newEntry.question = entryArray[i].question;
      newEntry.answer = entryArray[i].answer;

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
      })

    });
  });
}
