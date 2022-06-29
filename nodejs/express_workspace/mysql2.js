let mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost', // DB IP
    user: 'root',
    password: '20170520',
    database: 'mydb',
    port:3306
});

// 데이터 추가하기
let title = '제목6';
let writer = '작성자6';
let contents = '내용6';

/* 
sql = `insert into board(title, writer, contents, wdate, hit) values('${title}', '${writer}', '${contents}', now(), 0)`;

pool.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
        if(err){
            console.log(err);
        }
        console.log("연결 성공");
        connection.release();
    });
});
 */

sql = `insert into board(title, writer, contents, wdate, hit) values(?, ?, ?, now(), 0)`;
params = ["새로운 제목", "새 작성자", "새 내용"]
console.log(sql);

pool.getConnection((err, connection) => {
    connection.query(sql, params, (err, rows) => {
        if(err){
            console.log(err);
        }
        console.log("연결 성공");
        connection.release();
    });
});