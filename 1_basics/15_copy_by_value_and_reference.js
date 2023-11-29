/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive(원시타입)값은 copy by value다
 * 2) 객체는 copy by reference다
 */

// copy by value
let original = "안녕하세요";
let clone = original;

console.log(original); // '안녕하세요'
console.log(clone); // '안녕하세요'
// 문제 1.
console.log(original === clone); //

clone += " 이우빈 입니다."; // '안녕하세요 이우빈 입니다.'
console.log("==============");
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요 이우빈 입니다.

// 문제 2.
console.log(original === clone); //

// copy by reference
let originalObj = {
  name: "이우빈",
  group: "우빈패밀리",
};
let cloneObj = originalObj;
console.log("==============");

console.log(originalObj); // {name: '이우빈', group:'우빈패밀리'}
console.log(cloneObj); // {name: '이우빈', group:'우빈패밀리'}
// 문제 3.
console.log(originalObj === cloneObj); //

console.log("==============");

originalObj["group"] = "동현스터디";
console.log(originalObj); // {name: '안유진', group:'동현스터디'}
console.log(cloneObj); // {name: '안유진', group:'동현스터디'}

// 문제 4.
console.log(originalObj === cloneObj); //

originalObj = {
  name: "이우빈",
  gruop: "동현스터디",
};

cloneObj = {
  name: "이우빈",
  gruop: "동현스터디",
};

// 문제 5.
console.log(originalObj === cloneObj); //

// 문제 6.
const yuJin1 = {
  name: "이우빈",
  group: "동현스터디",
};
const yuJin2 = yuJin1;

const yuJin3 = {
  name: "이우빈",
  group: "동현스터디",
};

console.log(yuJin1 === yuJin2); //
console.log(yuJin1 === yuJin3); //
console.log(yuJin2 === yuJin3); //

console.log("==============");

/**
 * Spread Operator
 *
 * Spread Operator는 위치가(순서) 굉장히 중요하다.
 */
const yujin4 = {
  ...yuJin3,
};

console.log(yujin4);
console.log(yuJin3 === yujin4);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
  name: "코드팩토리", // name : 코드팩토리
  ...yuJin3, // name : 안유진 , group : 아이브
  // 자바스크립트 특성상 위에서 아래로 읽는데 내용이 겹치면 아래 내용이 덮어쓴다.
};
console.log(yuJin6);

const yuJin7 = {
  ...yuJin3,
  name: "코드팩토리",
  // 자바스크립트 특성상 위에서 아래로 읽는데 내용이 겹치면 아래 내용이 덮어쓴다.
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];

console.log(numbers2);
