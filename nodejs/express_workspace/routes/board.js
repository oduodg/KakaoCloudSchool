let express = require("express");
let router = express.Router();
let ejs = require('ejs');
let fs = require('fs');

router.get('/', (req, res) => {
    res.redirect("/board/list"); // 다른 url로 redirect
});

router.get('/list', (req, res) => {
    fs.readFile("./view/board_list.ejs", "utf-8", (error, data) => {
        if(error){
            console.log("file not found");
            res.send("<h1>file not found</h1>");
            return
        }
        res.send(ejs.render(data));
    });
});

// http://127.0.0.1/board/view/Tom/23/010-0000-0000
router.get('/view/:name/:age/:phone', (req, res) => {
    fs.readFile("./view/board_view.ejs", "utf-8", (error, data) => {
        if(error){
            console.log("file not found");
            res.send("<h1>file not found</h1>");
            return
        }
        res.send(ejs.rxender(data, {
            name: req.params.name, 
            age: req.params.age, 
            phone: req.params.phone
        }));
    });
});

module.exports = router