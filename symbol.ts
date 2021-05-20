// Symbol: ES 2015 Symbol
// cannnot use with new Symbol
// Symbol used as Function to get the type

console.log(Symbol('any') === Symbol('any'));

// primitive type의 값을 넣어 사용
// 고유하고 수정 불가능한 값
// >> 접근을 제어에 사용

const sym = Symbol();

const obj = {
  [sym]:"value", // []없이 sym을 쓰면 접근하지 못함!

};

obj[sym]