let express = require('express');

let app = express();

// get방식 파라미터 처리
app.get("/userinfo", (req, res) =>{
    console.log(req.query);
    // get방식만
    let name = req.query.name;
    let age = req.query.age;

    res.send(`<h1>${name} ${age}</h1>`)
});

app.get("/array", (req, res) =>{
    console.log(req.query);
    
    let arr = req.query.arr;
    let result = "";
    for(i in arr){
        result += `${arr[i]}<br>`
    }

    res.send(result);
});


app.use((request, response) => {
    response.status(404).send(`<h1>Error</h1>`)
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});