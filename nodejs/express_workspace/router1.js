let express = require('express');

let app = express();
// post 방식으로 보내기 위해서 필요
app.use(express.urlencoded({extended:true})); // 초창기에는 body-parser 모듈 설치 후 사용했는데 현재는 express가 모두 처리한다.

// 특정 url - 어떤 action이 짝이 될 것인가 - 라우터
/* 
클라이언트로부터 정보를 보낼 때

get방식: 127.0.0.1:4000/a?x=4&y=7   request.query["키"]
새로운 get방식: 127.0.0.1:4000/a/4/7 request.params["키"]

post방식: 미들웨어를 하나 연결한다.
app.use(expess.urlencoded({extended:true})) request.body["키"]
*/

app.get("/a", (req, res, next) => {
    res.send("this is a A"); // writeHead + write + end. 들어오는 데이터에 맞추어서 적절히 데이터를 전송한다.
});

app.get("/b", (req, res, next) => {
    res.send("this is a B");
});

app.get("/board/list", (req, res, next) => {
    res.send("this is board list");
});

// 새로운 방식으로 값을 받아보자
app.get("/a/:x", (req, res, next) => {
    let x = req.params.x;
    res.send("receive" + x);
});

// http://127.0.0.1:4000/a/10/20
app.get("/a/:x/:y", (req, res, next) => {
    let x = req.params.x;
    let y = req.params.y;
    res.send("receive" + x + " and " + y);
});

// http://127.0.0.1:4000/add/10/20
app.get("/add/:x/:y", (req, res, next) => {
    let x = parseInt(req.params.x);
    let y = parseInt(req.params.y);
    res.send(`${x} + ${y} = ${x+y}`);
});

// http://127.0.0.1:4000/person?name=Tom&age=11&phone=010-0000-0000
app.get("/person", (req, res, next) => { // get 방식
    let name = req.query.name;
    let age = req.query.age;
    let phone = req.query.phone;
    res.send(`name: ${name} <br> age: ${age} <br> phone: ${phone}`);
});

// http://127.0.0.1:4000/person
// post 방식은 postman에서 Body로 보내야함.
app.post("/person", (req, res) => { // post 방식
    let name = req.body.name;
    let age = req.body.age;
    let phone = req.body.phone;
    res.send(`name: ${name} <br> age: ${age} <br> phone: ${phone}`);
});


// http://127.0.0.1:4000/person/Tom/11/010-0000-0000
app.get("/person/:name/:age/:phone", (req, res, next) => {
    let name = req.params.name;
    let age = req.params.age;
    let phone = req.params.phone;
    res.send(`name: ${name} <br> age: ${age} <br> phone: ${phone}`);
});


app.use((request, response) => {
    response.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
