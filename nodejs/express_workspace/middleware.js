let express = require('express');

let app = express();
// 본래의 callback 함수에는 세번째 인자로 next를 둔다.
// next를 호출하면 현재의 함수로부터 그 다음 위치에 있는 함수를 자동으로 호출한다.
// next를 호출하지 않으면 해당 함수에서 작동을 멈춘다.
app.use((request, response, next) => {
    request.name = "Brown";
    response.name = "Lion";
    console.log("first middleware");
    next();
});

app.use((request, response, next) => {
    request.phone = "010-1234-5678";
    response.phone = "010-0000-0000";
    console.log("second middleware");
    next();
});

app.use((request, response, next) => {
    console.log("third middleware");
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h1>" + request.name + "</h1>"); // end 함수가 호출되어야 전송이 종료됨
    response.write("<h1>" + response.name + "</h1>");
    response.write("<h1>" + request.phone + "</h1>");
    response.write("<h1>" + response.phone + "</h1>");
    response.end("<h1>Express Middleware</h1>");
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});