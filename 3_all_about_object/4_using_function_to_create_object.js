/**
 * 함수로 객체를 만드는 것 생성자 함수
 * Using function to create objects
 */

function IdolModel(name, year) {
  // console.log(new.target);
  // new키워드를 사용하지 않아도 사용할 수 있는 방법
  if (!new.target) {
    return new IdolModel(name, year);
  }

  // 프로퍼티 셋팅
  this.name = name;
  this.year = year;

  // 정적 메서드
  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };

  // return {}; 객체 값을 반환하면 생성자 함수를 사용할 수 없다.
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
// console.log(yuJin.dance());

// new 키워드를 작성하지 않으면 일반 함수고, undefined 다.
const yuJin2 = IdolModel("안유진", 2003);
console.log(yuJin2); // undefined

// 화살표 함수는 생성자 함수 사용 하지 못함.
const IdolModelArrow = (name, year) => {
  (this.name = name), (this.year = year);
};

const yuJin3 = new IdolModelArrow("안유진", 2003);
