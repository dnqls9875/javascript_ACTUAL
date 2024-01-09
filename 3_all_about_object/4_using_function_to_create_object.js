/**
 * Using function to create objects
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };

  this.song = function () {
    return `${this.name}이 노래를 부릅니다.`;
  };
}

const yuJin = new IdolModel("안유진", 2003);
const wonYoung = new IdolModel("장원영", 2004);

console.log(yuJin.dance());
console.log(wonYoung.song());
