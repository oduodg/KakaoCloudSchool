const { connected } = require("process");

function abs(number){ // 절댓값 함수
    if(number > 0)
        return number;
    else
        return -number;
}

function isLeap(s){ // 윤년 함수
    if(s % 4 == 0 && s % 100 != 0 || s % 400 == 0)
        return true;
    else
        return false;
}

function hello(){
    return "Hello nodejs"
}

// 외부로 모듈을 노출시켜야 다른 모듈에서 이 모듈에 대한 접근이 가능함
// 외부로 내보낼 때 exports.키 = 함수명 또는 exports["키"] = 함수명
exports.abs = abs;
exports.isLeap = isLeap;
exports.hello = hello; // 함수 hello를 hello라는 이름으로 내보냄
exports["test"] = hello; // 함수 hello를 test라는 이름으로 내보냄
