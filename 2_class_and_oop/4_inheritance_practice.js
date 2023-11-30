class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// const yuJin = new IdolModel("안유진", "아이브");
// console.log(yuJin);

class FemailIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MailIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yuJin = new FemailIdolModel("안유진", 2003);
console.log(yuJin);

console.log(yuJin.dance());
console.log(yuJin.name);

const jiMin = new MailIdolModel("지민", 1995);
console.log(jiMin);

console.log(jiMin.sing());
console.log(jiMin.name);

const cf = new IdolModel("코드팩토리", 1992);
console.log(cf);
console.log(cf.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemailIdolModel);
console.log(yuJin instanceof MailIdolModel);

console.log("==============");

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemailIdolModel);
console.log(jiMin instanceof MailIdolModel);

console.log("==============");

console.log(cf instanceof IdolModel);
console.log(cf instanceof FemailIdolModel);
console.log(cf instanceof MailIdolModel);
