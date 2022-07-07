/* 
function Person(name){
    this.name = name; // instatnce의 property
}

const person = new Person('홍길동');

console.dir(Person); // 브라우저에서 확인
 */
/* 
const obj = {};

const parent = {x : 1}

obj.__proto__ = parent;

console.log(obj.x); // 동적으로 상위 프로토타입 객체 바꿔치기
 */
/* 
const obj = {}; //객체 literal로 만든 객체
console.log(obj.__proto__.constructor.name); //Object
 */

/* 
// 객체 생성하는 방법
// 객체를 생성할 때 객체의 상위 prototype 객체를 직접 지정할 수 있다.
const obj = Object.create(null);

console.log(obj.__proto__); //undefined

// 그럼 이런 경우에는 어떻게 하면 좋을까요?
// Object()가 가지고 있는 method를 이용하는게 좋다.
// Object.getPrototypeOf(obj): obj의 상위 프로토타입 객체를 들고와라!
console.log(Object.getPrototypeOf(obj)); //null -> 상위 프로토타입 객체가 없다.
 */
/* 
var foo = function(){}; // 함수표현식
console.log(foo.__proto__ === Function.prototype); //true
console.log(foo.prototype.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); //null

// 함수 foo의 생성자는 Function 생성자 함수
console.log(foo.constructor === Function); //true 
 */

/* 자바스크립트의 최상위 객체는 window */
//console.log(Object === window.Object); //true (브라우저에서 확인하기)


/* instance 메소드와 prototype 메소드 */
/*
function Person(name){
    this.name = name;
    // instance 메소드
    // this.getName = function(){

    // }
}

// prototype 메소드 선언
Person.prototype.sayHello = function(){
    console.log(`안녕하세요. ${this.name}`);
}

// instance를 생성
const me = new Person('홍길동');

// overriding: 상속되는 method를 재정의
me.sayHello = function(){
    console.log(`Hello ${this.name}`);
}

// 만약 overriding이 발생하면 이 발생된 overriging에 의해서
// 숨겨진 prototype 메소드를 property shadowing 되었다고 한다.
me.sayHello(); //Hello 홍길동
*/
/* 
function Person(name){
    this.name = name
}

// 자동으로 만들어진 Person의 prototype을 객체literal을 사용해서 변경하기
Person.prototype = {
    //constructor: Person,
    sayHello(){
        console.log(('안녕하세요!'));
    }
}

const me = new Person('홍길동');

console.log(me.constructor === Object); //true
// me의 생성자는 Person이 아닌 Object임을 주의할 것!
 */

/* 
function Person(name){
    this.name = name
}

const me = new Person('홍길동');

const parent = {
    sayHello(){
        console.log('안녕하세요!');
    }
}

// me의 prototype 객체의 상위 객체를 parent로 변경한다.
Object.setPrototypeOf(me, parent);

console.log(me.__proto__ === Person.prototype); //false
 */

/* 
function Person(name){
    this.name = name
    // instance 메소드: 각각의 instance가 독자적으로 갖는 메소드
    this.callme = function(){}
}

// prototype 메소드: 만들어진 하위 객체에 상속되는 메소드
Person.prototype.sayHello = function(){
    console.log('안녕!');
}

// static 메소드: instance가 사용할 수 없는 메소드
Person.staticMethod = function(){ // person의 property에 붙는다.
    console.log('Hi!');
}
 */

/* 
'use strict';
function foo(){
    x = 10; 
}

foo();
console.log(x); //ReferenceError: x is not defined
 */
/* 
(function(){
    // non-strict mode
    var let = 10; // 예약어인 let을 식별자를 써도 error가 발생하지 않는다.
    // inner function, nested function
    function foo(){
        'use strict'; // strict mode
        let = 20; //SyntaxError: Unexpected strict mode reserved word
    }
}()) 
*/
/* 
'use strict';
var obj = {};

delete obj;
*/

/* 
var obj = new Object();

var str = 'Hello'; // primitive value
                   // data type: string
'Hello'.toUpperCase(); // 내부적으로 refer 객체를 만든다.
str.toUpperCase(); // wrapper 객체 생성, 소멸
str.tolowerCase(); // wrapper 객체 생성, 소멸

var strObj = new String('홍길동');
//console.log(typeof strObj); //object
console.dir(strObj); // 유사배열객체(브라우저에서 확인)
 */
/* 
var obj = {}

function myFunc(){
    console.log('안녕');
    // nested function(inner function) 중첩 함수
    function sayHello(){
        console.log('Hello');
    }
}

myFunc();
console.log('하하');
*/
/* 
const x = 1;

function foo(){
    const y = 2;
    function bar() {
        const z = 3;
        console.log(x+y+z);
    }
    bar();
}
foo(); 
*/

/* closure */
/* 
const x = 1;

function outer(){
    const x = 10;
    const inner = function(){
        console.log(x);
    }
    return inner;
}

const innerFunc = outer();
innerFunc(); 
*/
/* 
function foo(){
    const x = 1;
    const y = 2;
    function bar(){
        const z = 3;
        console.log(x);
    }
    bar();
}

const bar = foo();
bar();
 */
/* 
//let num = 0; // 변수 num은 전역이기 때문에 보호할 수 없다.
const increase = function(){
    let num = 0;
    return ++num;
}

console.log(increase()); //1
console.log(increase()); //1
console.log(increase()); //1
 */
/* 
const increase = (function(){ // 즉시 실행 함수
    let num = 0;
    return function(){
        return ++num;
    }
}());

console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
 */

const counter = (function(){
    let num = 0;

    return {
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    }
}());
console.log(counter.increase()); //1
console.log(counter.increase()); //2
console.log(counter.increase()); //3

console.log(counter.decrease()); //2
console.log(counter.decrease()); //1
console.log(counter.decrease()); //0