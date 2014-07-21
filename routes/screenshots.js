var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var webshot = require('webshot');

/* GET screenshots listing. */
router.get('/', function(req, res) {
  res.json({ shots: [] });
});

router.post('/', function(req, res) {
  var url = req.body.url;
  var identifier = uuid.v4();
  res.json({job: identifier});
  webshot(url, 'public/' + identifier + '.png', function (err) {
    if (err) {
      console.log('Failed to webshot ' + url + ' ID:' + identifier);
    }
  }); 
});

module.exports = router;
