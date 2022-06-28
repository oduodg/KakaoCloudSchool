let express = require('express');

let app = express();
app.use(express.urlencoded({extended: true}));

let boardRouter = express.Router(); // 라우터 객체를 만든다.
boardRouter.get("/list", (req, res) => {
    res.send("/board/list");
});

boardRouter.get("/write", (req, res) => {
    res.send("/board/write");
});

boardRouter.get("/view", (req, res) => {
    res.send("/board/view");
});

// 라우터 설정하기
app.use("/board", boardRouter); // url이 /board로 시작하는건 모두 boardRouter에게 보냄
// boardRouter의 url은 자동으로 /board로부터 시작되서
// /board/list, /board/write, /board/view 의 형태로 됨
app.use((request, response) => {
    response.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});