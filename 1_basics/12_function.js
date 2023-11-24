/**
 * ^ function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */

console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * ^ DRY
 * *D : Don't
 * *R : Repeat
 * *Y : Youself
 * *반복하지 않는 코드를 작성하는게 효율적인 코드를 작성하는 법
 */

function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}
// calculate();

console.log("================================================================");

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

/**
 * & 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다. (인자)
 *
 * & 실제 입력하는 값은 argument 라고 한다. (인수)
 */
calculate(2);
calculate(4);

console.log("================================================================");

function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 6);

console.log("================================================================");

function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2, 4);
multiply(2);

/**
 * ^ 반환받기
 * return 받기
 *
 * retrun 키워드를 사용하면 함수 안에서 작업한 값을
 * 함수 외부에서 받을 수 있기 때문에 유용하다.
 */
function multiply(x, y) {
  return x * y;
}
const result = multiply(2, 4); // 함수에 반환 값이 있을 때는 변수를 선언하듯 값을 받아오면 된다.
console.log(result);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * ^ Arrow 함수 (화살표 함수)
 */
const multiply2 = (x, y) => {
  return x * y;
};

const result3 = multiply2(5, 7);
console.log(result3);

const multiply3 = (x, y) => x * y; // 한줄로 사용된다면 화살표 함수는 {} 생략, return 생략 가능
const result4 = multiply3(8, 5);
console.log(result4);

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function (x, y) {
  return x * y;
};
const result5 = multiplyTwo(4, 5);
console.log(result5);
// console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log("================================================================");
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...argument) {
  return Object.values(argument).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9));

console.log("================================================================");

// 즉시 실행 함수 (immediately invoked function)
// 함수를 괄호 안에 넣어주고, ()로 실행 하면된다.
(function (x, y) {
  console.log(x * y);
})(4, 5);

// ! 함수는 object(객체)이다.
console.log(typeof multiply); // function
console.log(multiply instanceof Object); // instanceof 는 좌측에 있는게 우측인가
