// 사용 자제할 것
// 필요한 경우는 거의 없음!

// noImplicitAny 
// 인자와 함수 모두 any를 지정해야 함.
function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("any");

any1.toString();

// 안 좋은 예
let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; // d까지 any가 됨.

// 누수를 막을 것
function leakingAny(obj: any) {
  const a:number = obj.num; // a 이후로 누수가 막아짐.
  const b = a + 1;
  return b;
}

const c = leakingAny({num: 0});
// c.indexOf('0'); // a에 타입을 지정하지 않으면 오류가 발생하지 않음