/**
 * POST   /api/data       -> create
 */

const dataRoute = function(app) {
  var baseUrl = '/api';
  var dataModel = require('./data.model');

  /**
   * Persist new data onto database
   */

  app.post(baseUrl + '/data', (req, res) => {
    var data = new dataModel();
    data.question = req.body.question;
    data.answer = req.body.answer;

    data.save((error) => {
      if (error) {
        res.send(error)
      };

      res.json({
        message: 'success',
      });
    });
  });
};


module.exports = dataRoute;
