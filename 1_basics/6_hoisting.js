/**
 * Hoisting
 */
console.log("Hello");
console.log("World");
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// console.log(name); // undefined
// var name = "코드팩토리";
// console.log(name);

/**
 * Hoising은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

// var name;
// console.log(name);
// name = "코드팩토리";
// console.log(name);

// var 말고도 let, const도 호이스팅이 될까?
// let과 const를 사용하는 이유:  변수 선언,할당 하기 전에 참조를 하면 undefined로 값이 암묵적으로 초기화되는 걸 막아준다.
// 호이스팅은 발생은 하는데 에러가 나온다.

console.log(yuJin);
// let yuJin = "안유진";
const yuJin = "안유진";
