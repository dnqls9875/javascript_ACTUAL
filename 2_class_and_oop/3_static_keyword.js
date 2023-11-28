/**
 * Static Keyword
 */
// class IdolModel {
//   name;
//   year;
//   static groupName = "아이브"; // static keyword를 사용하면 class에 귀속된다. 인스턴스 자체에는 귀속되지 않음 new 키워드 쓸 필요 없음

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static retrunGroupName() {
//     return `아이브`;
//   }
// }

// // 인스턴스
// const yuJin = new IdolModel("안유진", 2003);
// console.log(yuJin);

// //
// console.log(IdolModel.groupName);
// console.log(IdolModel.retrunGroupName());

/**
 * factory constructor
 */

class IdolModel {
  name;
  year;
  static groupName = "아이브";

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static retrunGroupName() {
    return `아이브`;
  }

  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);

console.log(IdolModel.groupName);
console.log(IdolModel.retrunGroupName());

const yuJin2 = IdolModel.fromObject({
  name: "안유진",
  year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(["장원영", 2004]);
console.log(wonYoung);
