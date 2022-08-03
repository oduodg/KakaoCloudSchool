/* map()을 알아보자 */
// Array.prototype.map()

const array1 = [1, 4, 9, 16];

const map1 = array1.map(function (x) {
  return x * 2;
});

console.log(map1); // [ 2, 8, 18, 32 ]

// arrow function으로 쓰기 
// 한 줄이면 return 생략, 중괄호 생략 가능
const map2 = array1.map(x => x * 2);

console.log(map2); // [ 2, 8, 18, 32 ]

/* =============================================================== */

// Array.prototype.filter()
// filter는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 변환

const words = ["세종대왕", "이황", "강감찬", "샤인머스캣", "소리없는 아우성"]

// 글자 길이가 3자를 초과하는 데이터만 추려서 새로운 배열 생성
const result = words.filter((word) => {
  return word.length > 3;
})

console.log(result); // [ '세종대왕', '샤인머스캣', '소리없는 아우성' ]

/* =============================================================== */

// 전개 연산자 (Spread Operator) => ...
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let res = arr1.concat(arr2, arr3);
console.log(res); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

let res2 = [...arr1, ...arr2, ...arr3]
console.log(res2); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

let obj1 = {
  a: '1',
  b: '2'
}

let obj2 = {
  c: '3',
  d: '4'
}

res3 = { obj1, obj2 }
console.log(res3); //{ obj1: { a: '1', b: '2' }, obj2: { c: '3', d: '4' } }
res4 = { ...obj1, ...obj2 }
console.log(res4); //{ a: '1', b: '2', c: '3', d: '4' }

/* =============================================================== */

/* 구조분해 할당(ES6, Destructuring) */
// 이 방식을 사용하는 이유는.. 코드가 간결해지기 때문에
// 객체나 배열의 속성을 분해해서 개별 변수에 담을 수 있게 해줘요!

let obj = {
  name: '홍길동',
  age: 20,
  address: '서울'
}

//let {name, age, address} = obj;
let { address: { zipcode, city } } = obj;
//zipcode, city

let a, b;
[a, b] = [10, 20];

/* =============================================================== */

// 배열의 기존 요소를 삭제하거나 교체하기에 적합한 메소드가 있어요.
// 배열 요소의 순서를 바꿀 때 편리하다.
// splice()
// splice()는 원본 배열이 바뀐다.
// array.splice(start위치, 삭제count, 추가할 item1, item2, ...)

const months = ['1월', '2월', '4월', '5월', '8월'];
months.splice(2, 0, '3월'); // 2번 위치에 삭제하지 않고 '3월'을 추가
console.log(months); //[ '1월', '2월', '3월', '4월', '5월', '8월' ]

months.splice(3, 1, '7월'); // 3번 위치에 '4월'을 삭제하고 '7월'을 추가
console.log(months); //[ '1월', '2월', '3월', '7월', '5월', '8월' ]

let x = months.splice(3, 1); // 지워진 값을 return한다.
console.log(x); //[ '7월' ]

console.log(months); //[ '1월', '2월', '3월', '5월', '8월' ] -> 원본 배열이 변경