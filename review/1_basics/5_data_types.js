/**
 * Data Types
 *
 * 일곱개의 Primitive Type과 (원시값)
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) Bigint
 * 5) undefined
 * 6) null
 * 7) Symbol
 *
 * 8) Object
 *    Function
 *    Array
 *    Object
 */

// ? 1. Number 타입
const age = 30;
const temerure = -10;
const pi = 3.14;
console.log(typeof age, typeof temerure, typeof pi);
console.log("-----------------------");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity, typeof nInfinity);
console.log("-----------------------");

// ? 2. String 타입
const codeFactiory = "코드팩토리";
const empty = "";
console.log(typeof codeFactiory, typeof empty);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬리시를 스트링으로 표현하고 싶다면 두번 입력하면 된다 -> ``
 */

const iveYuJinN = "아이브\n안유진";
const iveYuJinTab = "아이브\t안유진";
const iveYuJinBackSlash = `아이브\\안유진`;
console.log(iveYuJinN);
console.log(iveYuJinTab);
console.log(iveYuJinBackSlash);
const smallQutoation = "아이브'코드팩토리";
console.log(smallQutoation);

const iveWonYoung2 = `아이브' 
코드팩토리`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const gruopName = "아이브";
console.log(gruopName + " 안유진 아니야?");
console.log(`어? 저사람은 ${gruopName} 안유진 아니야?`);
console.log("-----------------------");

/**
 * ${ } => iterpolation 보간
 */

// ? 3. Boolean 타입

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue, typeof isFalse);
console.log("-----------------------");

// ? 4. undefined

/**
 * 사용자가 직접 값을 초기화 하지 않았을 때
 * 지정되는 값이다.
 *
 * 직접 undefined 값을 초기화 하는건 지양해야 한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log("-----------------------");

/**
 * ? 5. null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값을 초기화 할때 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init); // object 문법 상 오류 (버그)
console.log("-----------------------");

/**
 * ? 6. Symbol 타입
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol 함수를
 * 호출해서 사용한다.
 *
 */
const test1 = "1";
const test2 = "2";

console.log(test1 == test2);
