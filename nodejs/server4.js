const http = require("http");
const fs = require("fs");
const url = require('url');

// http://127.0.0.1:3000/image

let server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    if(pathName == "/image"){
        // 이미지 파일을 이미지 폴더에서 읽는다.
        fs.readFile("./images/salad.jpg", (error, data) => {
            if(error){
                res.statusCode = 200;
                res.setHeader("Content-type", "text/html");
                res.end(`<h1>file not found</h1>`);
                return;
            }
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data);
        });
    } else if(pathName == "/movie"){
        // 이미지 파일을 이미지 폴더에서 읽는다.
        fs.readFile("./medias/salad.mp4", (error, data) => {
            if(error){
                res.statusCode = 200;
                res.setHeader("Content-type", "text/html");
                res.end(`<h1>file not found</h1>`);
                return;
            }
            res.writeHead(200, {'Content-Type': 'video/mp4'});
            res.end(data);
        });
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트 열기