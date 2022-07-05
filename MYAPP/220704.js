const myArr = [1, 2, 3];

myArr.forEach(function(data, idx){
    console.log(data);
    console.log(idx);
})

//code runner 실행 단축키: ctr + opt + n

var x = 1;
var y = 2;

// 자바스크립트에서 var 키워드로 변수의 중복선언이 가능하다.
var x = 100; // 가능. 사실은 중복선언이 아니라 위에 중복된 변수가 있다면 무시하고 var 키워드가 없는 것처럼 동작함.
var y; // 가능. 초기화 구문이 없으면 코드 자체를 무시.

console.log(x);
console.log(y);



var x = 1; // 전역변수
if(true){
    var x = 100; // var로 선언된 이 x는 지역변수가 아니다!! 
    // var 키워드는 if문의 scope를 scope로 인정하지 않는다. (var은 함수 레벨의 scope를 생성한다.)
    // 따라서 위의 var x = 1에서 선언한 x가 중복 선언된 것이라고 보면 된다.
}
console.log(x); //100


for(var i=0; i<5; i++){
    console.log(i);
}

console.log(i); //5



var x = 1; // 전역변수
function myFunc(){
    var x = 100; // function-level scope
    console.log(x); //100
}
myFunc(); //100
console.log(x); //1



var x = 1; // 전역변수
function myFunc(){
    console.log(x); //undefined
    var x = 100; // function-level scope
}
console.log(x); //1
myFunc(); //undefined



/* let keyword */
//let x = 100;

//let x = 1; // SyntaxError: Identifier 'x' has already been declared


//let score = 100;

{ // block-level scope
    //let score = 10;
    //let myVar = 1;
}

//console.log(myVar); // ReferenceError: myVar is not defined



//console.log(myVar);
//let myVar = 100; // ReferenceError: myVar is not defined



// let myVar = 1; // global variable
// {
//     console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
//     let myVar = 100;
// }




let myVar = 1.0;

console.log(myVar === 1); //true
// 모든 변수는 64bit 실수로 처리함.

console.log(3/2); //1.5



let str = '이것은 \n소리없는 \n아우성';
console.log(str);

let str1 = `이것은
소리없는
아우성`;
console.log(str1);




let name1 = '홍길동';
console.log('내 이름은 ' + name1 + '입니다.');

console.log(`내 이름은 ${name1}입니다.`)



const mySymbol = Symbol(); // Symbol 함수 호출
console.log(typeof mySymbol); //symbol
console.log(mySymbol); //Symbol(), 값이 노출되지 않는다.

const mySymbol1 = Symbol();
const mySymbol2 = Symbol();
console.log(mySymbol1 === mySymbol2); //false

const mySymbol3 = Symbol('소리없는 아우성'); // Symbol()의 인자는 description(꼬리표)같은 기능임. 심볼값과는 아무 관련이 없다. 
const mySymbol4 = Symbol('소리없는 아우성');
console.log(mySymbol3 === mySymbol4); //false
console.log(mySymbol3.description); //소리없는 아우성 

if(mySymbol1){
    console.log("있어요!");
}



const s1 = Symbol.for('mySymbol');
// global symbol registry(전역 심볼 저장소)라는 곳이 있다.
// 여기에서 해당 인자를 key로 가지고 있는 symbol을 찾는다.
// 만약 해당 symbol이 존재하지 않는다면 symbol을 만들고 
// global symbol registry에 등록하고 symbol을 리턴한다.

const s2 = Symbol.for('mySymbol');
console.log(s1 === s2); //true



console.log(Symbol.keyFor(s2)); //mySymbol



const Direction= {
    // 방향을 나타내는 4가지 property
    /* 
    'UP': 1,
    'DOWN': 2,
    'LEFT': 3,
    'RIGHT': 4 
    */
   // 뒤의 value값이 바뀌는 경우 error가 일어날 확률이 크므로 값을 Symbol처리한다.
    'UP': Symbol(),
    'DOWN': Symbol(),
    'LEFT': Symbol(),
    'RIGHT': Symbol() 
}

let myDirection = Direction.UP;

if(myDirection == Direction.DOWN){
    // 내 방향이 DOWN일 때 실행할 코드
}



// console.log(1 + 2); //3

/* 묵시적 형변환 */
// 숫자를 문자열로 바꿔서 연산함
console.log(1 + '2'); //12

// true를 1로 변환
console.log(1 + true); //2 

// null을 0으로 변환
console.log(1 + null); //1

console.log(1 + undefined); //NaN



console.log(typeof String(1)); //string
console.log(typeof String(NaN)); //string
console.log(typeof (1).toString()); //string