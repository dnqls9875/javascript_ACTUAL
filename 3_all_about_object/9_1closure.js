/**
 * Closure
 *
 * A closuer is the combination of a function and the lexicla
 * environemnt within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 서넝ㄴ된 렉시컬 환경의 조합이다."
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다."
 */

function getNunber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(getNunber());

function getNunber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }
  return innerGetNumber;
}

const runner = getNunber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cachFunction() {
  // 아래 계산은 매우 오래걸린다는 가정을 했을 때
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }

  return innerCacheFunction;
}

const runner2 = cachFunction();
console.log(runner2(10));
console.log(runner2(20));

function cachFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner3 = cachFunction2();
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */

function Idol(name, yaer) {
  this.name = name;

  var _year = yaer;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yuJiin = new Idol("안유진", 2003);
console.log(yuJiin.sayNameAndYear());

console.log(yuJiin.name); // 안유진
console.log(yuJiin._year); // undefined

/**
 * this로 year을 객체 생성 하지 않았기 때문에 아래 생성자 함수._year로 는 접근할 수 없다.
 * 하지만 생성이 완료가 된 이후에 함수의 정의된 새로운 함수에서 나중에 값을 가져올 수 있다.
 */
