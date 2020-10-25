var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next){
  res.render('login')
})

router.get('/login/:userid/:password', function(req, res){
  // res.send(req.params);
  res.write('hello1');
  res.write(req.params.userid);
  res.end();
});

router.get('/test', function(req, res){
  var name = req.query.username;
  var pwd = req.query.password;
  res.send(`這是get-query，你輸入名字是${name}, 密碼是${pwd}`);
});

router.get('/test/:username/:password', function(req, res){
  var name = req.params.username;
  var pwd = req.params.password;
  res.send(`這是get-params你輸入名字是${name}, 密碼是${pwd}`);
});

router.post('/test', function(req, res){
  var name = req.body.username;
  var pwd = req.body.password;
  res.send(`這是post，你輸入名字是${name}, 密碼是${pwd}`);
});

module.exports = router;
