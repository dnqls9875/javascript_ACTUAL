/**
 * Data Types
 *
 * *여섯개의 Primitive Type(원시타입)과
 * *한개의 Object Type(객체,참조 타입)이 있다.
 *
 * ^ Primitive Type (원시타입)
 * & 1) Number (숫자)
 * & 2) String (문자)
 * & 3) Boolean (불리언 = 참,거짓)
 * & 4) undefined (undefined)
 * & 5) Null (널)
 * & 6) Symbol (심볼)
 *
 * ^ Object Type(객체,참조 타입)
 * & 7) Object(객체)
 * ! Function
 * ! Array
 * ! Object
 */

// Number Type
const age = 29;
const tempature = -10;
const PI = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof PI);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// String Type
const codeFactory = "코드팩토리";
console.log(typeof codeFactory);

const ive = " '아이브' 안유진 ";
console.log(ive);

/**
 * & Template Literal
 *
 * ? Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬레시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 *
 */
const iveYuJin = "아이브\n안유진";
console.log(iveYuJin);
const iveWonYoung = "아이브\t장원영";
console.log(iveWonYoung);
const backSlash = "아이브\\코드팩토리";
console.log(backSlash);
const smallQutoat = "아이브'코드팩토리";
console.log(smallQutoat);

// Template Literal
const iveWonYoung2 = `아이브 
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = "아이브";
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * undefined 타입
 *
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 *
 * 직접 undefined 값을 초기화하는건 지양해야한다.
 */

let noInit; // undefined
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init); // object타입으로 변환 -> 오류(버그)
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */

const test1 = "1";
const test2 = "1";
console.log(test1 === test2);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */

const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);
console.log(typeof dictionary);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

/**
 * Array 타입 (배열)
 *
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const iveMembersArray = ["안유진", "레이", "이서", "리즈", "장원영", "가을"];
console.log(iveMembersArray);

/**
 * index
 *
 * 0부터 시작한다.
 * 1씩 올라간다.
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = "코드팩토리"; // -> 해당 array 배열 지정해서 변경하는법
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다. (정적타이핑)
 * - 깐깐하다, 오류가 적다
 *
 * dynmic typing -> 변수의 타입을 명시적으로 선언하지 않고, 가에 의해 타입을 '추론'한다.
 * JS -> dynmic typing(동적 타이핑)
 * - 오류가 많다.
 */
