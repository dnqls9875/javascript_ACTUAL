/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// ! 기존에 있는 배열을 변경하는 메서드

// push() -> Array 마지막 인덱스에 아이템 추가
// 중요한 건 기존에 iveMembers 배열에 직접 변경 했다라는게 중요
console.log(iveMembers.push("코드팩토리"));
console.log(iveMembers);

console.log("===================");

// pop() -> 마지막 엘레멘터리를 삭제해준다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("===================");

// shift() -> 첫번째 엘레멘터리를 삭제해준다.
console.log(iveMembers.shift());
console.log(iveMembers);

console.log("===================");

// unshift() -> Array 첫번째 인덱스에 아이템 추가
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

console.log("===================");

// splice()
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

console.log("===================");

// ! 기존에 있는 배열을 변경하지 않는 메서드

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

// concat() => push와 비슷하지만 원래 Array를 변경하지 않는다.
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

console.log("===================");

// slice() => splice와 비슷하지만 원래 Array를 변경하지 않는다.
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

console.log("===================");

// spread operator
let iveMembers2 = [...iveMembers];

console.log(iveMembers);

console.log("===================");

// ! 압도적으로 많이 사용 되는것
// * 모든 값들을 string으로 엮을 때 굉장히 많이 사용된다.
// join() -> string으로 반환됨 ,를 기준으로 모든 값들을 합칠 수 있음
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

console.log("===================");

// & 정렬

// sort()
// 오름차순으로 정렬
iveMembers.sort();
console.log(iveMembers);

// 내림차순으로 정렬
console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a,b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

console.log("===================");

// ^ 중요
// map() -> 모든 값들을 순회한다.
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

console.log("===================");

// filter() -> true를 반환하면 해당 값을 keep하고, false를 반환하면 keep하지 않게 된다.
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0)); // [8,6]
console.log("===================");

// find() -> 가장 첫번째로 해당이 되는 값
console.log(numbers.find((x) => x % 2 === 0)); // 8
console.log("===================");

// findIndex() 가장 첫번째 해당 인덱스를 반환한다.
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1
console.log("===================");

// ^ 중요
// reduce()
console.log(numbers.reduce((p, n) => p + n, 0)); // 25
