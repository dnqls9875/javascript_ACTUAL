/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 연산자의 위치
 *
 * 선위 증가/감소 연산자 사용할 것
 * ++ , --
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = "99";
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true; // true는 1로 암묵적 변환
console.log(+sample);
console.log(typeof +sample);

sample = false; // true는 0으로 암묵적 변환
console.log(+sample);
console.log(typeof +sample);
sample = "안유진";
// NaN -> Not a Number = 숫자가 아니다
console.log(+sample);

sample = "99";
console.log(-sample);
console.log(typeof -sample);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 할당 연산자(assignment operator)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 비교 연산자 (자바스크립트 꽃)
 *
 * 1) 값의 비교 (사실상 필요가 없는 비교)
 * 2) 값과 타입의 비교 (자주 쓰이는 비교)
 */

console.log(5 == 5);
console.log(5 == "5");
console.log(0 == "");
console.log(true == 1);
console.log(false == 0);
console.log(false == "0");
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

console.log(5 === 5);
console.log(5 === "5");
console.log(0 === "");
console.log(true === 1);
console.log(false === 0);
console.log(false === "0");
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// ! !부정
console.log(5 != 5);
console.log(5 != "5");
console.log(0 != "");
console.log(true != 1);
console.log(false != 0);
console.log(false != "0");
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

console.log(5 !== 5);
console.log(5 !== "5");
console.log(0 !== "");
console.log(true !== 1);
console.log(false !== 0);
console.log(false !== "0");
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? "pass" : "fail");
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 논리 연산자
 *
 * 1) &&
 * 2) ||
 */

// ^ && 은 둘다 true여야 true 반환 false가 하나라도 있으면 false 반환
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// ^ ||은 하나라도 true면 true 반환 모두 false 여야 false 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

console.log(10 > 1 && 10 < 20);
console.log(10 < 1 && 10 < 20);
console.log(10 < 1 && 10 > 20);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

console.log(10 > 1 || 10 < 20);
console.log(10 < 1 || 10 < 20);
console.log(10 < 1 || 10 > 20);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * 단축평가 (short circuit evaluation)
 *
 * ! &&를 사용했을때 좌측이 true면 우측 값 반환
 * ! &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ! ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ! ||를 사용했을때 좌측이 false 우측 값 반환
 */
console.log(true || "아이브");
console.log(false || "아이브");
console.log(false && "아이브");
console.log(true && "아이브");

console.log(true && true && "아이브");
console.log(true && false && "아이브");

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name; // undefined
console.log(name);

// name 변수 값이 null이거나 undefined 일 때 ?? 우측 값으로 할당하여 name을 출력하면 코드팩토리가 나옴
name = name ?? "코드팩토리";
console.log(name); // 코드팩토리

// 이미 변수에 코드팩토리라는 값이 할당이 되어 있으므로 null이나 undefined 값이 아니여서 그대로 코드팩토리 출력
name = name ?? "아이브";
console.log(name); // 코드팩토리

let name2;
name2 ??= "코드팩토리";
console.log(name2);
