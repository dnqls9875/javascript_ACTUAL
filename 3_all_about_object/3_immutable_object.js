/**
 * Immutable Object
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};
console.log(yuJin);
console.log(yuJin.age);

/**
 * Extensible
 * ! 확장이 가능한지 여부를 설정하는 것
 */
console.log(Object.isExtensible(yuJin)); // true

yuJin["position"] = "vocal";
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // false
// Extensible 설정이 false면 값을 추가 할 수 없음
// 반대로 true면 값을 추가 할 수 있음
// 사용빈도 적음

yuJin["groupName"] = "아이브";
console.log(yuJin);

// 값 삭제는 할 수 가능함
delete yuJin["position"];
console.log(yuJin);

console.log("================================================");

/**
 * Seal
 * 봉인이 되어 있냐 안 되어 있냐 질문이기 때문에
 * 기본값 false
 */

const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));

console.log("================================================");

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2["groupName"] = "아이브";
console.log(yuJin2);
