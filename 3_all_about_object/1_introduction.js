/**
 * All about objects
 *
 * 객체를 선언할때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const yuJin = {
  name: "안유진",
  year: 2003,
};
console.log(yuJin);

console.log("================================");

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class IdolModelGroup extends IdolModel {
  group;

  constructor(name, year, group) {
    super(name, year);
    this.group = group;
  }
}

const yuJin2 = new IdolModelGroup("안유진", 2003, "아이브");
console.log(yuJin2);

console.log("================================");

// 생성자 함수
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const gaEul = new IdolFunction("가을", 2002);
console.log(gaEul);
