let express = require('express');

let app = express();

app.use("/", (request, response) => {
    // 브라우저 정보 확인
    console.log(request);
    let agent = request.header("User-Agent");
    console.log(agent);

    // match(/패턴/) - 정규식
    if (agent.toLowerCase().match(/chrome/) && !agent.toLowerCase().match(/edg/))
        response.send("agent is Chrome");
    else
        response.send("agent is not Chrome")
})
app.use((request, response) => {
    response.status(404).send(`<h1>Error</h1>`)
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});