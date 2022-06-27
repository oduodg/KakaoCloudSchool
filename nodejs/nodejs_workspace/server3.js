const http = require("http");
const url = require("url");
const fs = require("fs");

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    // url에 따라서 다르게 동작하는 것을 라우팅한다고 함
    if(pathName == "/"){
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end("<h1>Hello nodejs</h1>");
    } else if(pathName == "/test"){
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end("<h1>Test</h1>");
    } else if(pathName == "/hello"){
        let query = url.parse(req.url, true).query;
        let name = query.name;
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(`<h1>Hello ${name} !!!</h1>`);

    } else if(pathName == "/add"){
        let query = url.parse(req.url, true).query;
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(`<h1>${x} + ${y} = ${x+y}</h1>`);
    } else if(pathName == "/gugu"){
        let query = url.parse(req.url, true).query;
        let result = "";
        let dan = parseInt(query.dan)
        for(i = 1; i <= 9; i++){
            result = result + `${dan} * ${i} = ${dan * i} <br>`
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(result);
    } else if(pathName == "/rect"){
        let query = url.parse(req.url, true).query;
        let width = parseInt(query.width);
        let height = parseInt(query.height);
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(`<h1>${width * height}</h1>`);
    }
    else{
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end("<h1>error</h1>");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트 열기

/* 
문제1: http://127.0.0.1:3000/hello?name=Jane        Hello Jane !!!
문제2: http://127.0.0.1:3000/add?x=10&y=7           17
문제3: http://127.0.0.1:3000/gugu?dan=4             4단 출력
문제4: http://127.0.0.1:3000/rect?width=5&height=7  사각형 면적 35
*/