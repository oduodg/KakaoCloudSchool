const http = require("http");
const fs = require("fs");
const url = require('url');
const ejs = require("ejs"); // html 문서하고 데이터를 렌더링함

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    fs.readFile("./html/test.html", "utf-8", (error, data) => {
        res.statusCode = 200;
        res.setHeader("Content-type","text/html");
        // html 파일을 ejs엔진을 이용해 렌더링함
        // ejs의 renderdml 첫번째 인자는 파일의 내용
        // 두번째 인자는 JSON 형태로 데이터를 전송한다.
        res.end(ejs.render(data, {
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