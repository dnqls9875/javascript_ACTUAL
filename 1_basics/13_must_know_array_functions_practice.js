let familyMembers = ["아빠", "엄마", "누나", "소현", "우빈", "쁘니", "리온"];
console.log(familyMembers);

console.log("=====================");

// push()
console.log(familyMembers.push("또복")); // 뒤에 추가
console.log(familyMembers);
console.log("=====================");

// pop()
console.log(familyMembers.pop()); // 뒤에 삭제
console.log(familyMembers);
console.log("=====================");

// shift()
console.log(familyMembers.shift()); // 앞에 삭제
console.log(familyMembers);
console.log("=====================");

// unshift()
console.log(familyMembers.unshift("또복")); // 앞에 추가
console.log(familyMembers);
console.log(familyMembers.unshift("아빠")); // 앞에 추가
console.log(familyMembers);
console.log("=====================");

// splice()
console.log(familyMembers.splice(0, 3)); // 0부터 3개까지의 인덱스 자르기 -> [ '아빠', '또복', '엄마' ]
console.log(familyMembers); // [ '누나', '소현', '우빈', '쁘니', '리온' ]
console.log("=====================");

familyMembers = ["아빠", "엄마", "누나", "소현", "우빈", "쁘니", "리온"];

// concat()
console.log(familyMembers.concat("또복")); // push와 같지만 기존 배열 영향주지 않음
console.log(familyMembers);
console.log("=====================");

// slice()
console.log(familyMembers.slice(0, 4)); // 0부터 4전인 3까지의 인덱스 자르기 -> [ '아빠', '엄마', '누나', '소현' ]
console.log(familyMembers); // 기존 배열 영향 주지 않음
console.log("=====================");

// spread operator
let familyMembers2 = [...familyMembers]; // ["아빠", "엄마", "누나", "소현", "우빈", "쁘니", "리온"];
console.log(familyMembers);
console.log("=====================");

// join
console.log(familyMembers.join()); // 아빠,엄마,누나,소현,우빈,쁘니,리온
console.log(familyMembers.join("❤")); // 아빠❤엄마❤누나❤소현❤우빈❤쁘니❤리온
console.log("=====================");

// sort()
familyMembers.sort(); // 오름차순 정렬
console.log(familyMembers);
console.log(familyMembers.reverse()); // 내림차순 정렬
console.log("=====================");

let numbers = [1, 8, 6, 9, 5, 4];
console.log(numbers);

numbers.sort();
console.log(numbers);
console.log(numbers.sort((x, y) => (x > y ? 1 : -1)));
console.log(numbers.sort((x, y) => (x > y ? -1 : 1)));
console.log("=====================");

// map()
console.log(familyMembers.map((x) => x));
console.log(
  familyMembers.map((x) => {
    if (x === "쁘니" || x === "리온") {
      return `오래오래 건강하자:${x}`;
    } else {
      return `모두 행복하자:${x}`;
    }
  })
);
console.log(familyMembers);
console.log("=====================");

// filter
numbers = [1, 8, 6, 9, 5, 4]; // 33

console.log(numbers.filter((x) => x % 2 === 0)); // [8,6,4]
console.log("=====================");

// find()
console.log(numbers.find((x) => x % 2 === 0)); // 8
console.log("=====================");

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1
console.log("=====================");

console.log(numbers.reduce((p, n) => p + n, 0));
