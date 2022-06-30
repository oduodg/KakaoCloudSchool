var express = require('express');
var router = express.Router();
var common = require("./common");

/* GET home page. */
router.get('/ss', function(req, res, next) {
    req.session["userid"] = "test";
    req.session["userid"] = "Tom";

    // 새로 추가되었음
    req.session.save(() => {
        console.log("save session");
        res.redirect("/member/get");
    });

    console.log( req.session["userid"]);
    console.log( req.session["username"]);
});

router.get('/get', function(req, res, next) {
    console.log(req.session["userid"]);
    console.log(req.session["username"]);
    req.send(`${req.session["userid"]} ${req.session["username"]}`);
    });

router.get('/login', (req, res) => {
    res.render("./member/member_login");
});

router.post("/login", (req, res) => {
    let userid = req.body.userid;
    let password = req.body.password;
    let sql = `select userid, password from member where userid= '${userid}'`;
    //let sql = "select userid, password from member where userid='"+userid+"'" ;
    common.excuteDB(sql)
    .then((result) => {
        if(result.length == 0)
            res.send({"result": "3"}); // 아이디 존재 안함
        else{
            if(result[0]["password"] == password){
                req.session['userid'] = result[0]["userid"];
                req.session['username'] = result[0]["username"];
                req.session['email'] = result[0]["email"];

                res.send({"result":"1"}); // 로그온 성공
            }
            else
                res.send({"result": "2"}); // 패스워드 실패
        }
    });
});

router.get("/logout", (req, res) => {
    req.session.destroy(); // 세션 삭제
    res.redirect('/');
});

// 회원가입
router.get("/register", (req, res) => {
    res.render("./member/member_register");
});

router.post("/register", (req, res) => {
    var userid = req.body.userid;
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var phone = req.body.phone;

    var sql = `insert into member(userid, password, username, email, phone, wdate, delyn) values(?, ?, ?, ?, ?, now(),'N')`;
    var params = [userid, password, username, email, phone];
    common.excuteDB(sql, params)
    .then((result) => {
        res.send({result:"success"});
    })
    .catch((error) => {
        res.send({result:"fail"});
    })
});

router.post("/check", (req, res) => {
    console.log('*************');
    let userid = req.body.userid;
    let sql = `select count(*) cnt from member where userid='${userid}'`;
    console.log(sql);
    common.excuteDB(sql)
    .then((result) => {
        console.log(result);

        if(result[0]["cnt"] == 0){
            res.send({"result": "success"});
        }
        else{
            res.send({"result":"fail"});
        }
    })
    .catch((error) =>{
        console.log(error);
    });
});
module.exports = router;