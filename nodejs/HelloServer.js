const http = require("http"); // 외부 모듈을 이 파일로 불러옴

http.createServer((req, res) => {
    // 클라이언트로부터 연결 요청이 오면 이 함수가 호출됨
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html"); // 보내는 정보가 html임을 알림
    res.end("<h1>Hello nodejs</h1>");
}).listen(3000, "127.0.0.1", () => {
    console.log("Servere start at http://127.0.0.1:3000");
}); // 3000번 포트 열기