let express = require('express');

let app = express();

app.get("/test", (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(`<h1>GET Express</h1>`);
});

app.post("/test", (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end(`<h1>POST Express</h1>`);
});

app.get("/data", (request, response) => {
    response.send({name:"홍길동", age:12, phone:"010-0000-0000"});
});

app.get("/msg", (request, response) => {
    response.send("<h1>안녕하세요 express입니다.</h1>");
});

app.use((request, response) => {
    response.status(404).send(`<h1>Error</h1>`)
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});