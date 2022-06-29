// mysql, 프라미스 기반의 mysql(콜백의 지옥을 벗어나기 위해서)
// mysql - 트랜잭션 처리할 때 콜백의 지옥에 빠진다.
// npm install mysql

let mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost', // DB IP
    user: 'root',
    password: '20170520',
    database: 'mydb',
    port:3306
});

pool.getConnection((err, connection) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("연결 성공");

    //sql = "select * from board";
    sql = `select a.id, a.writer, a.title, a.contents, date_format(a.wdate, '%Y-%m-%d') as wdate from board a`;
    connection.query(sql, (err, rows) => {
        // 쿼리가 실행된 결과를 가져온다.
        if(err){
            console.log(err);
            connection.release();
            return;
        }
        // rows 파라미터에 수행된 결과가 전달된다.
        for(let row of rows){
            console.log(row);
        }
        connection.release(); // 연결 해제
    });
});

// mysql8 이상부터 가능
// alter user 'root'@'localhost' identified with mysql_native_password by '20170520';