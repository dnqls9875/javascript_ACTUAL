/**
 * Getter and Setter
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  /**
   * 1)데이터를 가공해서 새로운 데이터를 반환할 때
   * 2)private한 값을 반환할 때
   */

  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  /**
   * 무조건 파라미터를 한개를 받아야 함
   */
  set setName(name) {
    this.name = name; // this.name은 상위에 name임
  }

  set setYear(year) {
    this.year = year; // this.year 상위에 year임
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = "이우빈";
yuJin.setYear = 1995;
console.log(yuJin.nameAndYear);
console.log(yuJin);

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);
