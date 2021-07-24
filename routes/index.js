var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('App working')
});

router.get('/auth/redirect', (req, res) => {
  if(req.user){
    res.json(req.user);
  } else {
    res.send('Authentication failed')
  }
})

module.exports = router;
