var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next){
  res.send('列表功能')
})

router.get('/edit', function(req, res, next){
    res.send('編輯功能')
  })
module.exports = router;
