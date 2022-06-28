var express = require('express');
var router = express.Router();


var boardData = [
    {id:0, title:"제목1", writer:"작성자1", contents:"내용1", wdate:"2022-06-28"},
    {id:1, title:"제목2", writer:"작성자2", contents:"내용2", wdate:"2022-06-28"},
    {id:2, title:"제목3", writer:"작성자3", contents:"내용3", wdate:"2022-06-28"},
    {id:3, title:"제목4", writer:"작성자4", contents:"내용4", wdate:"2022-06-28"},
    {id:4, title:"제목5", writer:"작성자5", contents:"내용5", wdate:"2022-06-28"},
]

/* GET Home page. */
router.get('/', function(req, res, next) {
    // app.js에서 ejs 파일의 경로가 views로 확정, 확장자도 ejs로 확정되었기 때문에 생략함
    //res.send('respond with a resource');
    //res.render("list", {title:"게시판"});
    res.redirect("/board/list");

});

// RESTful API 서버
// 안드로이드, react, vue, angular, 폴리머 ...
// 직접 데이터 베이스에 접근해서 데이터 읽고 쓰기를 하지 않는다.
// 안드로이드는 애초에 디비 클라이언트를 올려놓을 수 없고
// react나 vue는 nodejs 기반이라 쓰자면 쓸 수 있지만
// MVVW 방식에서는 직접 데이터베이스에 접근 불가능하게
// 백엔드가 대신에 데이터베이스에서 데이터를 가져와 전달함
// 데이터만 전달하는 서버 - nodejs는 애초에 json

//http://127.0.0.1:3000/board/list
router.get("/list", (req, res) => {
    //res.send(boardData);
    res.render("./board/board_list.ejs", {boardList:boardData});
});

//http://127.0.0.1:3000/board/view/0
router.get("/view/:id", (req, res) => {
    let id = parseInt(req.params["id"]);
    //res.send(boardData[id]);
    res.render("./board/board_view.ejs", {boardItem: boardData[id]});
});

router.get("/write", (req, res) => {
    res.render("./board/board_write.ejs");
});

router.post("/save",(req, res) => {
    let title = req.body.title;
    let writer = req.body.writer;
    let contents = req.body.contents;
    let id = boardData.length;
    let wdate = "2022-06-28";

    boardData.push({id:id, title:title, writer:writer, contents:contents, wdate:wdate});
    res.redirect("/board/list");
})

module.exports = router;
