var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next){
  var msgs = [
    {author:'JJ', title: '首po', content:'頭香！'},
    {author:'無名氏', title: '不落人後', content:'第二篇'},
    {author:'路人', title: '^_^', content:'廢文無需多言'}
  ];
  var mytitle = '留言板測試';
  res.render('msgboard', {title: mytitle,msglist: msgs});
})

router.get('/edit', function(req, res, next){
    res.send('編輯功能')
  })
module.exports = router;
