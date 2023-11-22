/**
 * Variable 선언하기
 *
 * *1) var - 더이상 사용하지 않는다.
 * *2) let
 * *3) const
 */

var name = "코드팩토리";
console.log(name);

var age = 29;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = "안유진";
console.log(ive);

const newJeans = "뉴진스";
console.log(newJeans);

// * const로 선언한 변수는 값을 변경할 수 없다.

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것.
 * 2) 할당
 *
 */
var name; // 변수 선언
name = "Kim"; // 값 할당
var name = "Lee"; // 변수 선언 및 할당

let girlFriend; // -> 변수를 선언하기만 하고, 그 변수를 출력을 하게 되면 자바스크립트 특성 두가지 선언단계와 초기화단계와 동시에 이뤄지므로 undefined 초기값이 할당됨
console.log(girlFriend);
