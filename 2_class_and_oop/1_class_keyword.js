/**
 * Class Keyword
 *
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name; // this는 현재 인스턴스
    this.year = year;
  }

  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// constructor - 생성자

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);
const ray = new IdolModel("레이", 2004);
console.log(ray);
const wonYoung = new IdolModel("장원영", 2004);
console.log(wonYoung);
const liz = new IdolModel("리즈", 2004);
console.log(liz);
const eseo = new IdolModel("이서", 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(gaeul.sayName());
console.log(ray.sayName());
console.log(wonYoung.sayName());
console.log(liz.sayName());
console.log(eseo.sayName());

console.log(typeof IdolModel);
console.log(typeof yuJin);

// Test 복습
// 우리 가족 정렬

class FamilyMembers {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHello() {
    return `안녕 내 성은 ${this.firstName}이고, 이름은 ${this.lastName}이야. 내 나이는 부끄럽지만 말해줄게 ${this.age}살이야 잘 부탁해`;
  }
}

const father = new FamilyMembers("이", "용열", 61);
const mather = new FamilyMembers("문", "순덕", 59);
const sister = new FamilyMembers("이", "영채", 34);
const yongSister = new FamilyMembers("이", "쁘니", 12);
const yongSister2 = new FamilyMembers("이", "리온", 11);
const wife = new FamilyMembers("박", "소현", 29);
const baby = new FamilyMembers("이", "또복", 0);

console.log(father);
console.log(mather);
console.log(sister);
console.log(yongSister);
console.log(yongSister2);
console.log(wife);
console.log(baby);

console.log("==================");

console.log(father.sayHello());
console.log(mather.sayHello());
console.log(sister.sayHello());
console.log(yongSister.sayHello());
console.log(yongSister2.sayHello());
console.log(wife.sayHello());
console.log(baby.sayHello());
