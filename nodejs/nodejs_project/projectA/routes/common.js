var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',   //디비 아이피 
    user:'root',
    password:'20170520',
    database:'mydb',
    port:3306
});

//외부로 pool객체를 노출시킴

async function excuteDB(sql, params){
    let promise = new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            conn.query(sql, params, (err, rows) => {
                //console.log(rows);
                if(err)
                    reject(err);
                else
                    resolve(rows);
                conn.release();
            });
        });
    });

    await promise; // 프라미스가 끝나기를 기다리다가
    return promise; // 종료하면 프라미스를 반환함
}
exports.pool = pool;
exports.excuteDB = excuteDB;