let fs = require("fs");

fs.readFileSync("./mymodule.js", "utf-8", (error, data) => {
    if (error){ // 에러가 있을 때 객체가 만들어져서 전달됨.
        console.log(error);
        return;
    }
    console.log(data);
});

console.log("exit..");