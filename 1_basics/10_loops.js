/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(`${[i, j]} `);
  }
}

//  *을 이용해서 6x6의 정사각형을 출력해라
let square = "";
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);

/**
 * for...in
 */
const yuJin = {
  name: "안유진",
  year: 2003,
};
for (let key in yuJin) {
  console.log(key);
}
console.log("================");

const iveMembersArray = ["안유진", "장원영", "가을", "이서", "레이", "리즈"];

for (let key in iveMembersArray) {
  console.log(key);
  console.log(`${key} : ${iveMembersArray[key]}`);
}

/**
 * for of
 */

for (let vaule of iveMembersArray) {
  console.log(vaule);
}

// ! index 값을 가져올 때는 for...in, 만약에 값을 가져오고 싶을 때는 for...of

/**
 * conutinuie
 */

console.log("================");
while (number < 10) {
  number++;
  console.log(number);
}
/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
