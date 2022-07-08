/* 
//# class define
class Person{

}

//# 익명 class 표현식
const Person = class {};

//# 기명 class 표현식
const Person2 = class MyClass {};
// class MyClass {}는 class처럼 표현된 생성자 함수이다.
// Person2라는 식별자를 통해 사용할 수 있다.
 */

/* 
class Person{
    //# constructor(생성자)
    constructor(name){
        // instance의 초기화
        // instance의 property를 설정
        this.name = name;
    }

    //# prototype method
    sayHello(){
        console.log('Hello, prototype method');
    }

    //# static method
    static sayHi(){
        console.log('Hi, static method');
    }

}

const me = new Person('홍길동'); 
*/
/* 
//# class hoisting
const Person = "안녕하세요";
{
    console.log(Person); //안녕하세요

    class Person {}
}
 */
/* 
//# class는 생성자 함수와 메모리 구조가 같다.
class Person {
    constructor(name){
        this.name = name;
    }
}
const me = new Person('홍길동');
console.dir(me); //브라우저에서 확인
 */

/* 
// 객체 literal을 이용해서 객체를 생성하자.
const person = {
    firstName: '길동',
    lastName: '홍',

    getName: function(){
        return this.lastName + this.firstName;
    },

    //# get을 이용하면 반드시 return 구문이 존재해야 한다.
    get fullName(){
        return `${this.lastName}${this.firstName}`
    },
    set fullName(name){
        // 유효성 검사가 필요.

        [this.lastName, this.firstName] = name.split(' '); // 자바스크립트의 구조 분해 할당
    }
}

//console.log(person.getName());

// 이렇게 내부 데이터에 직접 접근하는 것은 지양한다. 
// -> 유효성 검사를 통해 이상한 값이 객체의 데이터를 오염시키는 것을 방지한다.
person.firstName = '김';
person.lastName = '연아';

person.fullName = '김 연아'; // 값을 저장하면 자동으로 set의 fullName이 실행된다.

console.log(person.fullName); // 값을 읽어올 때는 자동으로 get의 fullName이 실행된다.

 */

/* 
// 위 code를 class로 바꿔보자.
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get fullName(){
        return `${this.lastName}${this.firstName}`
    }
    
    set fullName(name){
        [this.lastName, this.firstName] = name.split(' ');
    }
}

const me = new Person('길동', '홍');
console.log(me.fullName);
 */

/* 
// 상위 class(super class)
class foo{

}

// 하위 class(sub class)
class bar extends foo {

}

const obj = new bar();
 */
/* 
//# 상속
// super class
class Animal {
    constructor(age, weight){
        this.age = age; // this.age의 age는 instance의 property, = 뒤의 age는 parameter
        this.weight = weight;
    } // 객체 literal이 아니고 class이므로 , 찍지 않는다.
    eat(){
        return '밥을 먹어요!';
    }
    move(){
        return '움직여요';
    }
}

class Bird extends Animal {
    constructor(age, weight, kk){
        // 상위 class의 constructor를 호출
        super(age, weight); // 상위 class에서 객체를 생성
        this.kk = kk; // Bird만 갖는 property
    }
    fly(){
        return '날아요!';
    }
}

const bird = new Bird(10, 30, 100);
console.log(bird);
console.log(bird instanceof Bird); //true
console.log(bird instanceof Animal); //true
 */

/* 
//# 생성자 함수로부터 상속받기
function Base(name) {
    this.name = name;
}

class Derived extends Base{

}
 */

/* 
function Base1(name) {
    this.name = name;
}

class Base2 {}

let tmp = true;
// 삼항 연산자 (? ... : ...)
class Derived extends (tmp ? Base1 : Base2){ // tmp 변수에 따라서 상속받을 클래스를 지정할 수 있다.

}
 */


class Base {
    constructor(name){
        this.name = name;
    }
    sayHello(){ // prototype method
        return "Hello";
    }
}

class Derived extends Base {
    sayHello(){ // overriding, 상위 클래스의 sayHello()는 shadowing된다.
        return "HiHi";
    }
}

class Derived1 extends Base {
    sayHello(){
        return super.sayHello() + this.name;
        // 상위 클래스의 sayHello()를 호출한다.
    }
}

const derived = new Derived('홍길동');
console.log(derived.sayHello()); //HiHi
const derived1 = new Derived1('홍길동');
console.log(derived1.sayHello()); //Hello홍길동
