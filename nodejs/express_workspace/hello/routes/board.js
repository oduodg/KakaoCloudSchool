var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // app.js에서 ejs 파일의 경로가 views로 확정, 확장자도 ejs로 확정되었기 때문에 생략함
    //res.send('respond with a resource');
    res.render("list", {title:"게시판"});
});

module.exports = router;
