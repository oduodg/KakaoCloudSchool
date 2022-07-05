/* 객체 literal로 객체 생성하기 */
/* 
var obj = {
    name: '홍길동', // key가 식별자 명명 규칙에 맞다면 quotation으로 감싸지 않아도 된다. 'name'(o), name(o)
    printName: function myPrint(){ // 함수가 property의 value가 될 수 있다.
        console.log(`내 이름은 ${this.name}`); // this는 현재 사용하는 객체를 지칭하는 레퍼런스
    },
    "!myPhone": '010-1234-5678', // key가 식별자 명명 규칙에 맞지않다면 quotation으로 감싸주어야한다.
    10: 300 // key를 숫자(10)으로 써도 자동 casting해서 string('10')으로 인식한다.
};

console.log(typeof obj); //object,
console.log(obj.name);
console.log(obj[10]); 
*/


/* property의 동적 추가, 삭제 */
/* 
var obj = {
    myName: '홍길동'
}

obj.myAge = 20;
obj['myAge'] = 30;
obj[10] = 300;
//obj."!myPhone" = '010-1234-5678'; // 불가능
obj["!myPhone"] = '010-1234-5678';

console.log(obj); //{ '10': 300, myName: '홍길동', myAge: 30, '!myPhone': '010-1234-5678' }

delete obj.myAge;
console.log(obj); //{ '10': 300, myName: '홍길동', '!myPhone': '010-1234-5678' }
 */


/* 기타 다른 형태의 property */
/* 
var obj = {
    10: '문자열 10으로 인식됩니다.',
    let: 'let도 keyword로 사용가능하지만 혼동되므로 권장되지 않아요.',
    myName: '홍길동',
    '!myName': 'naming rule에 맞지않는 경우는 따옴표로 감싸주어야 합니다.',
    myName: 'key를 중복해서 쓰면 마지막에 나온 것을 씁니다.'
}

console.log(obj);
// 출력 결과
// {
//     '10': '문자열 10으로 인식됩니다.',
//     let: 'let도 keyword로 사용가능하지만 혼동되므로 권장되지 않아요.',
//     myName: 'key를 중복해서 쓰면 마지막에 나온 것을 씁니다.',
//     '!myName': 'naming rule에 맞지않는 경우는 따옴표로 감싸주어야 합니다.'
// }

console.log(obj.myAddress); //정의되지 않은 key를 쓰면 error가 아닌 undefined가 출력된다.
*/


/* ES6에서 추가된 객체 literal 확장 */
/* 
let x = 1;
let y = 2;

// 식별자를 이용해서 property 정의하기
const obj = {x, y} // 변수의 이름을 key로 변수의 값을 value로 갖는다.
console.log(obj); //{ x: 1, y: 2 }
 */


/* property의 value로 작성된 함수를 method로 나타내기 */
/*
// let myObj = {
//     name: "홍길동",
//     printName: function(){ // 얘는 원래 자바스크립트에서 말하는 method가 아님.
//         console.log(this.name);
//     }
// }

// let myObj = {
//     name: "홍길동",
//     printName(){ // 자바스크립트라는 언어에서 얘기하는 method(축약표현으로 되어있는 형태)
//         console.log(this.name);
//     } 
// }

// myObj.printName(); //홍길동
*/


/* Primative value(원시값) vs 객체 */
/* 
let myStr = 'Hello'; // primative value

// primative value를 마치 객체(배열)처럼 사용할 수 있다.
console.log(myStr[0]); //H
console.log(myStr.length); //5

myStr[0] = 'h';
console.log(myStr); //Hello
console.log(myStr[0]); //H
 */


/* 함수 lieral */
/* 
var myFunc = function add(x, y){
    return x + y;
}

//console.log(add(3, 5)); // ReferenceError: add is not defined
console.log(myFunc(3, 5)); //8
 */


/* 함수 선언문 */
/* 
function foo(){ // foo라는 식별자. 내부적으로는 foo라는 이름의 변수가 생기고 함수 객체가 생성됨.
    console.log('foo 함수');
}

// 객체 하나 덜렁 있는 것.. 그냥 숫자 3 하나 딱 있는거랑 똑같다.
// (1 + 2) * 3
(function bar() {
    console.log('bar 함수');
})

foo();
bar(); // 사용불가능
 */


/* 함수 선언문 vs 함수 표현식 hoisting */
/* 
foo(); // 호출된다.
add(); // TypeError: add is not a function

// 함수 선언문
function foo(){
    console.log('foo 함수');
}

// 함수 표현식
var add = function bar(){
    console.log('bar 함수');
} 
*/


/* 자바스크립트의 함수는 오버로딩이 일어나지 않는다. */
/* 
// 함수 선언문
function add(x, y){
    return x + y;
}

console.log(add(2, 5));
// 인자를 순서대로 mapping하므로 x는 2로 초기화되고, y는 초기화되지 않아 undefined가 된다.
console.log(add(2)); //NaN (연산 불가)
// 인자의 개수가 달라도 함수 호출은 가능하다.


// 위에 선언한 함수 add는 내부적으로 arguments를 다 저장해둔다.
// arguments에 대해 알아보자.
function add() {
    // add(2, 3, 4)를 호출하면 arguments에 [2, 3, 4]가 저장된다.
    let sum = 0;
    // arguments는 유사배열객체(Array-like Object)이다.
    // 유사배열객체는 배열과 비슷하게 생겼지만 배열은 아니다.(배열의 특수한 method를 사용할 수 없음.)
    // 모든 유사배열객체는 length라는 property를 가지고 배열처럼 index를 이용해서 access 가능. 당연히 순환 가능.
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(2, 3, 4)); //9  
*/


/* 함수에 return 구문이 없으면 undefined를 반환한다. */
/* 
function add() {
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    //return sum;
}

console.log(add(2, 3, 4)); //undefined
 */


/* IIFE(즉시 실행 함수) */
/* 
(function add(){
    let x = 10;
    let y = 20;

    console.log(x + y);
}());
 */


/* 중첩 함수(nested function)(또는 내부 함수(inner function)) */
/* 
var x = 100; // global scope(전역변수)
var y = 200; // global scope(전역변수)
function outer(){ // outer function
    let x = 0; // function level scope(지역변수)

    function inner(){ // inner function
        let x = 10; // function level scope(지역변수), scope가 다르기 때문에 위에 있는 x와는 다른 x이다.
        console.log(y); //200
        // 자바스크립트 엔진은 처음에는 자신의 지역 scope에서 변수를 찾다가 찾는 변수가 없으면 상위 scope에서 찾는다.
        // 하위 scope -> 상위 scope로 계속해서 찾아 올라간다.
        // 전역변수는 가장 상위 scope이기 때문에 찾는데 오래걸린다. 그래서 전역변수를 많이 쓰면 좋지 않다는 것!
        // scope chain: 모든 scope는 chain으로 연결되어 있다.
    }
}
 */


/* 일급 객체 */
/*
// 잘 만든 함수가 존재한다. (아래 예시의 repeat 함수)
// 그런데 이 함수의 기능을 변경(추가)하고 싶다.. -> 그 방법은?
// 1. 원래 있던 함수를 수정하자! -> 오류 발생 risk가 너무 크다.
// 2. 함수를 새로 추가해서 만들자! -> 이것도 이상해
// 3. 함수를 추상화시켜서 인자로 받아서 사용하자! -> 채택!!

function repeat(n, f){
    for(var i=0; i<n; i++){
        f(i);
    }
}

let logAll = function(k){
    console.log(k);
}

let logOdd = function(i){
    if(i%2){
        console.log(i);
    }
}

repeat(5, logAll);
//repeat(5, logAll()); // 이거는 안된다!! ()는 함수를 호출하라는 뜻! logAll은 식별자임.

// logAll과 logOdd와 같은 함수들을 뭐라고 부를까??
// 콜백함수(Callback Function): 다른 함수의 인자로써 넘겨진 후 특정 이벤트에 의해 호출되는 함수.
// 그럼 콜백함수를 받아서 하나의 융합 함수를 만드는 repeat함수를 뭐라고 부를까??
// 고차함수(Higher-Ordered Function): 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수.
*/


/* scope */
/* 
var x = 1; // 전역 scope의 전역변수

function foo(){
    var x = 10; // 지역 scope의 지역변수
    console.log(x); //10
}
function bar() {
    console.log(x); //1
}

foo();
bar();
 */


/* 내부 slot 확인해보기 */
/* 
var obj = {
    name: '홍길동'
};

console.dir(obj) // dir로 객체의 세부 내용을 확인할 수 있다. -> 브라우저에서 확인해야 한다.
 */


/* Property Attribute를 확인해보자. */
/* 
const person = {
    name: 'Lee',
    age: 20
};

// property attribute를 직접적으로 접근할 수 없기 때문에 
// getOwnPropertyDescriptor 또는 getOwnPropertyDescriptors로 확인한다.

// person이라는 객체의 name이라는 property에 대한 내용을 들고와!
console.log(Object.getOwnPropertyDescriptor(person, 'name')); // 하나의 property 가져오기
//{ value: 'Lee', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(person)); // 모든 property(name, age)에 대해 가져오기
// {
//     name: {
//       value: 'Lee',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 20, writable: true, enumerable: true, configurable: true }
//   }
 */


/* property 정의하기 */
const person = {
    age: 20
};

// person.name = '홍길동';
Object.defineProperty(person, 'name', {
    value: '홍길동',
    writable: false,
    enumerable: false,
    configurable: true
});

console.log(person); // 브라우저에서 확인해야한다.(node로 확인불가능)
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

person.name = '아이유'; // writable: false 이므로 바뀌지 않는다.
console.log(person); //홍길동


// Object.keys(): property의 key만 뽑아서 유사배열객체로 보여줌.
console.log(Object.keys(person)); // name의 enumerable: false 이므로 age만 나온다.

for(let idx in person){
    console.log(idx); // property key (person의 key값들이 출력된다.)
    console.log(person[idx]); // property value (person의 value들이 출력된다.)
}