let promise = new Promise(function(resolve, reject){
    let data={"name":"홍길동","age":23, "phone":"010-0000-0000"};

    // setTimeout(()=>resolve(data), 1000);
    // setTimeout(()=>reject("데이터 수신 오류"), 1000);
    setTimeout(()=>{
        s = 0;
        for(i=1; i<=100; i++){
            s++;
        }
        resolve(s);
    }, 1000);
})
.then( (value)=> {
    console.log(value);
})
.catch(
    (error)=>{
        console.log(error)
    })
.finally(
    ()=>{console.log("ending...");}
);

console.log(promise);