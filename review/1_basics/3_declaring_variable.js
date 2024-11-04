/**
 * Variable 선언하기
 *
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 *
 */

var name = "코드팩토리";
console.log(name);

var age = 30;
var age = 32;
console.log(age);

let ive = "아이브";
ive = "장원영과 아이들";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 * var은 재선언 재할당 모두 가능
 * let은 재할당만 가능
 */

const newJeans = "뉴진스";
console.log(newJeans);

// newJeans = "코드팩토리";  // ! const는 재선언 재할당 모두 불가능 상수

/**
 * 선언과 할당
 * 1) 변수를 선언하는 것.
 * 2) 선언한 변수를 할당하는것
 */

let girlFriend;
console.log(girlFriend); // undefined 정의되지 않았다.

/**
 * const는 상수이므로 재선언 재할당이 불가능하므로
 * 초기값을 설정해줘야 한다.
 * 초기값을 할당해주지 않으면 undefined가 출력되지 않고, 오류가 뜬다.
 */
