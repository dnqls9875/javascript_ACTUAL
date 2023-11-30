/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name} 입니다.`;
  }
}

class FemailIdolModel extends IdolModel {
  // 노래, 춤, 퍼포먼스
  part;

  // overrides
  constructor(name, year, part) {
    super(name, year); // super 부모 클래스 == IdolModel(name,year) 과 같음
    this.part = part;
  }

  sayHello() {
    // ! super 키워드는 함수에서는 실행 가능 이외에는 this.name 이런식으로 해야함
    // return `안녕하세요 ${this.name} 입니다. 저는 ${this.part}를 맡고 있습니다.`;
    return `${super.sayHello()} 저는 ${this.part}를 맡고 있습니다.`;
  }
}

const yuJin = new FemailIdolModel("안유진", 2003, "리드보컬");
console.log(yuJin);

const wonYoung = new FemailIdolModel("장원영", 2002, "센터");
console.log(wonYoung);
console.log(wonYoung.sayHello());

console.log(yuJin.sayHello());
