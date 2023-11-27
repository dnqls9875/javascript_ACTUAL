/**
 * try...catch
 *
 * 1) 발생시킬때 => 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 => 잡는다고 한다. (catch)
 * 3) finally 키워드는 사용해도 되고, 사용하지 않아도 되는 옵셔널이다.
 */

function runner() {
  try {
    console.log("Hello");

    // 새로운 Error객체를 생성한다.
    throw new Error("큰 문제가 생겼습니다!");

    console.log("Code Factory");
  } catch (e) {
    console.log("---catch---");
    console.log(e);
  } finally {
    console.log("---finally---");
  }
}

runner();
