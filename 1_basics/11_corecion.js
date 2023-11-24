/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 27;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + "";
console.log(typeof test, test);

let test1 = "98" + 2;
let test2 = "98" * 2;
let test3 = "98" - 2;

/**
 * String 에는 + 연산자만 있고,
 * 나머지 연산자는 없으니 + 로 문자 + 숫자로 하면
 * 문자로 암묵적 타입 변환을 한다.
 */
console.log(typeof test1, test1);
console.log(typeof test2, test2);
console.log(typeof test3, test3);

/**
 * 명시적 타입 몇가지 더 배우기
 */
console.log("================");
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());
console.log("================");

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0")); // 정수 parseInt()
console.log(typeof parseFloat("0.99"), parseFloat("0.99")); // 실수 parseFloat()
console.log(typeof +"1", +"1");
console.log("================");

// ! 중요
/**
 * Boolean 타입으로의 변환
 */

console.log(!"x"); // 느낌표 하나가 값 앞에 있으면 부정을 의미 false
console.log(!!"x"); // 느낌표 두개가 값 앞에 있으면 부정의 부정을 의미하므로 원래값 true
console.log(!!""); // 느낌표 두개가 앞에 있고, 뒤에 스트링에 글자 (값이) 아예 없으면 false 글자가 있으면 무조건 true

console.log("================");
console.log(!!0);
console.log(!!"0");
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log("================");
console.log(typeof {}, !!{});
console.log(typeof [], !![]);

/**
 * 1. 아무 글자가 없는 경우 String
 * 2. 값이 없는 경우
 * 3. 0
 *
 * 모두 false를 반환한다.
 */
