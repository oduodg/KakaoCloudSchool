const http = require("http");
const fs = require("fs");
const url = require('url');
const queryString = require("querystring"); // 현재는 폐기된 라이브러리
// post로 온 데이터 처리

let server = http.createServer((req, res) => {
    // http://localhost:3000?name=Tom&age=23

    let pathName = url.parse(req.url).pathname;
    if(req.method == "GET" && pathName == "/"){ // GET 방식일 때
        console.log(req);

        let query = url.parse(req.url, true).query; // 쿼리를 파싱해서 JSON으로 변환
        console.log(query);
        console.log(query.name, query.age);
        console.log(query["name"], query["age"]);
        let data = fs.readFileSync("./html/index.html", "utf-8");

        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(data);
    } else if(req.method == "POST" && pathName == "/") {

        // 폐기상황 - 새로운 버전으로 바꿔보자
        /* 
        req.on("data", (data) => {
            let result = queryString.parse(data.toString());
            console.log(result.username, result.age);
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.end('<h1>' + data + '</h1>');    
        });
         */

        let body = "";
        req.on("data", (data) =>{
            body += data;
        });
        req.on("end", () => {
            let postData = new URLSearchParams(body);
            console.log(postData);
            console.log(postData.get("username"), postData.get("age"));
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.end(`<h1>${postData.get("username")} ${postData.get("age")}</h1>`);
        });
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트 열기