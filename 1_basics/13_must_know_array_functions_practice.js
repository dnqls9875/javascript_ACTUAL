let familyMembers = ["아빠", "엄마", "누나", "소현", "우빈", "쁘니", "리온"];
console.log(familyMembers);

console.log("=====================");

// push()
console.log(familyMembers.push("또복"));
console.log(familyMembers);
console.log("=====================");

// pop()
console.log(familyMembers.pop());
console.log(familyMembers);
console.log("=====================");

// shift()
console.log(familyMembers.shift());
console.log(familyMembers);
console.log("=====================");

// unshift()
console.log(familyMembers.unshift("또복"));
console.log(familyMembers);
console.log(familyMembers.unshift("아빠"));
console.log(familyMembers);
console.log("=====================");

// splice()
console.log(familyMembers.splice(0, 3));
console.log(familyMembers);
console.log("=====================");

familyMembers = ["아빠", "엄마", "누나", "소현", "우빈", "쁘니", "리온"];

// concat()
console.log(familyMembers.concat("또복"));
console.log(familyMembers);
console.log("=====================");

// slice()
console.log(familyMembers.slice(0, 4));
console.log(familyMembers);
console.log("=====================");

// spread operator
let familyMembers2 = [...familyMembers];
console.log(familyMembers);
console.log("=====================");

// join
console.log(familyMembers.join());
console.log(familyMembers.join("❤"));
console.log("=====================");

// sort()
familyMembers.sort();
console.log(familyMembers);
console.log(familyMembers.reverse());
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

console.log(numbers.filter((x) => x % 2 === 0));
console.log("=====================");

// find()
console.log(numbers.find((x) => x % 2 === 0));
console.log("=====================");

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));
console.log("=====================");

console.log(numbers.reduce((p, n) => p + n, 0));
