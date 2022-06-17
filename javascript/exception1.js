let json = "{bad json}";

try{
    let user = JSON.parse(json);
    alert(user.name);
}
catch(e){
    console.log(e.message);
}
finally{
    console.log("에러 발생과 상관없이 이 코드는 실행된다.")
}