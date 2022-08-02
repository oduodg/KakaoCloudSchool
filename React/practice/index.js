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

// Array.prototype.filter()
// filter는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 변환

const words = ["세종대왕", "이황", "강감찬", "샤인머스캣", "소리없는 아우성"]

// 글자 길이가 3자를 초과하는 데이터만 추려서 새로운 배열 생성
const result = words.filter((word) => {
  return word.length > 3;
})

console.log(result); // [ '세종대왕', '샤인머스캣', '소리없는 아우성' ]