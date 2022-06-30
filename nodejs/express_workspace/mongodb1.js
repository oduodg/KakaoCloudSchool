let mongoose = require("mongoose");

var promise = mongoose.connect('mongodb://127.0.0.1/mydb');
var db = mongoose.connection
// 몽고디비에서 오류가 있으면 오류를 콘솔로 바인딩하라
db.once('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("연결성공");
    //doRead(); // 비동기라서 콜백함수에서 호출해야 한다.
    //doView("홍길동");
    doInsert("이정우", 43);
    doInsert("김성훈", 32);
});

function doRead(){
    db.collection("person").find({}).toArray((err, results) => {
        if(err){
            console.log(err);
        }
        console.log(results);
    });
};

function doView(name){
    db.collection("person").findOne({name:name}).toArray((err, results) => {
        if(err){
            console.log(err);
        }
        console.log(results);
    });
};

function doInsert(name, age){
    db.collection("customSequence").findOneAndUpdate(
            {"_id":"hero"},  //query 
            {$inc:{seq:1}},  //update 
            function(err, doc){  //업데이트 성공하면 호출되는 함수 
                console.log( doc ); //업데이트하고나서 만들어진 객체 
                console.log( doc.value.seq ); 
                //여기서 insert  한다 
                var person={name:name, age:age, id:doc.value.seq}
                db.collection("person").insertOne(person, (err, res)=>{
                    console.log("insert success");
                })
            }
    )};