/* property 축약형 */
/*
var age = 20;
var obj = {
    userName: '홍길동',
    getName: function(){ // 통칭 method라고 부르지만 진짜 method는 아니다. "property"일뿐.
        console.log("this is a property not a method");
    },
    setName(){ // (ES6)JavaScript에서 말하는 "method"는 이렇게 축약표현으로 나타낸 것을 말한다.
        console.log("this is a method")
    },
    age // age: age 라고 쓰는 것과 같다. 축약표현이 가능하다.
    // key는 "age"가 되고, value는 변수 age의 값이 된다.
}

console.log(obj);
// 출력 결과
// {
//     userName: '홍길동',
//     getName: [Function: getName],
//     setName: [Function: setName],
//     age: 20
// }
 */


/* 객체의 property 변경 */
/* 
'use strict'; // strict mode

const person = {
    name: 'Lee'
};
// 객체가 확장이 가능한지
console.log(Object.isExtensible(person)); //true

person.age = 20;
console.log(person); //{ name: 'Lee', age: 20 }

// 확장금지
Object.preventExtensions(person);
person.address = 'Seoul'; // 'use strict'; 코드를 상단에 추가하여 strict 모드를 사용해서 error를 발생시킬 수 있다.
console.log(person); //{ name: 'Lee', age: 20 }
// address가 새로운 property로 추가되지 않는다.


// 밀봉
Object.seal(person);
delete person.name;
console.log(person); //{ name: 'Lee', age: 20 }
// name property가 삭제되지 않는다.


// 동결
Object.freeze(person); 
person.name = '아이유';
console.log(person); //{ name: 'Lee', age: 20 }
// name property의 값이 변경되지 않는다.
*/


/* 생성자 함수를 이용해서 객체 만들기 */
/* 
const person1 = {};
console.dir(person1);
// 객체 literal을 이용한 객체 생성

const person2 = new Object();
console.dir(person2);
// 생성자 함수를 이용한 객체 생성
// => instance
 */


/* 생성자 함수에 의한 객체 생성 */
/* 
// 생성자 함수의 이름 식별자는 PascalCase(첫글자 대문자로 시작)
function Person(){

}

const person1 = Person();
console.log(person1); //undefined (함수에서 return문이 없을 때)

// 생성자 함수로 객체(instance) 만들기
const person2 = new Person();
console.log(person2); //Person {} (빈 객체)
// 생성자 함수는 기본적으로 return문을 쓰지 않는다.


// 객체 literal로 객체 만들기
var person3 = {};
console.log(person3); //{}
 */


/* global 객체 */
/*
function Person(){
    // this
    // this라는 keyword는 생성자 함수일 경우도 있고
    // 일반 함수인 경우에도 있다.
    // 생성자 함수에서의 this => 생성자 함수에 의해서 만들어질 instance를 가리키는 reference
    // 일반 함수에서의 this => window
    console.log(this);
}

Person();
*/



/* return값으로 객체를 넘겼을 때*/
/*
function Person(name){
    this.name = name;
    this.getName = function(){
        return `내 이름은 ${this.name}`;
    }
    return {}; // 생성자 함수로 사용할 경우는 return 구문이 있으면 안된다.
		// 특히 객체를 return하게 되면 return값을 객체로 넘기게 되어 우리가 원하는 객체를 생성할 수 없다. -> Error
}

const person1 = new Person('아이유');
const person2 = new Person('김연아');

console.log(person1.getName()); //TypeError: person1.getName is not a function
console.log(person2.getName());
*/

/* return값으로 primitive value를 넘겼을 때 */
/*
function Person(name){
    this.name = name;
    this.getName = function(){
        return `내 이름은 ${this.name}`;
    }
    return 100; // return값으로 primitive value가 들어오면 이 값을 무시하기 때문에 error가 발생하지 않는다.
}

const person1 = new Person('아이유');
const person2 = new Person('김연아');

console.log(person1.getName());
console.log(person2.getName());
*/


/* this의 의미 */
/* 
function foo(){}

// foo() 함수에 property 추가하기
foo.myName = '홍길동';
foo.getName = function(){
    console.log(this);
}

foo(); // 함수 호출
new foo(); // 생성자 함수 호출
foo.getName(); // method 호출 -> 여기서 this는 함수 객체 foo이다.
 */


/* 객체의 호출 */
/*
// 함수 선언문
function foo() {}

// 함수 표현식
var bar = function(){};

// 객체 literal로 만든 일반 객체
const barx = {
    x: function(){} // 객체의 property로 함수가 할당
}

new foo(); // foo 함수 객체가 내부적으로 [[Constructor]] method를 가지고 있기 때문에 new 키워드로 instance를 만들어낼 수 있다.
new bar(); // [[Constructor]]를 가지고 있다.
new barx.x(); // [[Constructor]]를 가지고 있다.

// arrow function
const arrow = () => {}; // [[Constructor]]를 가지고 있지않다.
new arrow(); //TypeError: arrow is not a constructor

// ES6 함수 축약법 method
const obj = {
    x(){} // [[Constructor]]를 가지고 있지않다.
}
new obj.x(); //TypeError: obj.x is not a constructor 
*/


/* 생성자 함수 */
/* 
// 함수 선언문
function add(x, y) {
    return x + y;
}

var inst = new add();
console.log(inst); //add {}

function createUser(name, role){
    return {name, role};
}

var inst = new createUser();
console.log(inst); //{ name: undefined, role: undefined }

// 생성자 함수
function Circle(radius){
    this.radius = radius; // 여기서 가리키는 this는 window 
    // window 객체에 radius라는 property를 붙이는거임.
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

const circle = Circle(5); // 일반함수
console.log(radius); //5 window 객체에 붙은 radius값
console.log(circle); //undefined 함수에 return 구문이 없으니까 
*/


/* 일반 객체와 함수 객체의 차이 */
/* 
// 브라우저에서 확인하자
var obj = {
    name: '홍길동'
}

// 일반 객체
console.dir(obj); //Object

function square(number){
    return number * number;
}

// 함수 객체
console.dir(square); //f square(number) 
*/


/* caller */
/* 
function foo(f){
    return f();
}

function bar(){
    return 'caller: ' + bar.caller; // 여기서 쓴 bar는 함수 이름 bar를 지칭한다.
}

console.log(bar()); //caller: null 브라우저에서 확인

console.log(foo(bar)); // foo의 caller가 호출된다.
// 출력 결과
// caller: function foo(f){
//     return f();
// }
*/


/* 
// 생성자 함수로 사용할 목적으로 만들었어요!
// 함수 선언문
function Person(name){
    // 생성자 함수로 만들어질 instance가
    // 가지는 property를 설정
    this.name = name;
}

const person1 = new Person('홍길동');
const pereon2 = new Person('김길동');
 */


/* 
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter === circle2.getDiameter); //false
// instance마다 method를 각자 따로따로 가지므로 메모리가 낭비된다.
// instance가 생길 때마다 method도 새로 생기니까 메모리 낭비가 발생하는 것.
 */
/* 
// 그러면 공통으로 사용하는 method를 (상위)Prototype에 넣어두자!
function Circle(radius) {
    this.radius = radius;
    // this.getDiameter = function(){
    //     return 2 * this.radius;
    // }
    Circle.prototype.getDiameter = function(){
        return 2 * this.radius;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter === circle2.getDiameter); //true 
*/


/* 
function Circle(radius) {
    this.radius = radius;
    Circle.prototype.getDiameter = function(){
        return 2 * this.radius;
    }

    // 공용변수를 만들어 쓸 수 있다.
    Circle.prototype.name = '홍길동'
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.name, circle2.name); //홍길동 홍길동

// name을 바꿔주려면??
circle1.name = '아이유'; // circle1에 name property를 새로 추가한다.
console.log(circle1.name, circle2.name); //아이유 홍길동
// 이렇게 바꿔주면 안된다.

// 이렇게 바꿔주거나
Circle.prototype.name = '아이유';
console.log(circle1.name, circle2.name); //아이유 아이유

// 이렇게 바꿔줘야 한다.
circle1.__proto__.name = '아이유';
console.log(circle1.name, circle2.name); //아이유 아이유
 */



function foo(...args){
    console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    console.log(args); //[ 1, 2, 3, 4, 5 ]
    return args.pop(); // 배열은 pop과 같은 메서드 사용이 가능
}

var result = foo(1,2,3,4,5);
console.log(result); //5

// function foo(...args1, ...args2){ // 불가능
//     console.log(arguments);
//     console.log(args);
// }
