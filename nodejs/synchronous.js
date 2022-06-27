let fs = require("fs");

try {
    let data = fs.readFileSync("./mymodule.js", "utf-8");
    console.log(data);
}
catch(e) {
    console.log(e);
}

console.log("exit..");