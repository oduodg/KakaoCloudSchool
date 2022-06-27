const http = require("http");
const fs = require("fs");
const url = require('url');
const jade = require("jade"); 

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    fs.readFile("./html/test.jade", "utf-8", (error, data) => {
        let fn = jade.compile(data);
        res.statusCode = 200;
        res.setHeader("Content-type","text/html");
        res.end(fn({
            title: "EJS 엔진을 배워봅시다", 
            contents: "JSON 형태로 데이터를 보내주면 html과 결합하여 새로운 문서를 만든다.",
            fruits:["사과", "배", "거봉", "망고", "참외", "수박"],
            products:[
                {name: "노트북", price: 2000000},
                {name: "에어컨", price: 3000000},
                {name: "냉장고", price: 4000000},
                {name: "갤럭시", price: 600000}
            ]
        }));
    })
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트 열기