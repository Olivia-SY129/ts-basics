function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error('failed');
}

function infLoop(): never {
  while(true) {}
}

// never 타입은 모든 타입의 subtype. 모든 타입에 할당 가능.
// never에는 어떤 것도 할당 불가 (any 포함)

let a: string = 'hello';

if (typeof a !== 'string') {
  a; // a는 never
}

declare const b:string | number;

if (typeof b !== 'string') {
  b; // b는 number
}


// 잘못된 타입을 넣는 실수를 막을 때 사용.

// type Indexable<T> = T extends string ? T & {[index:string]: any} : never;
// const b: Indexable<{}> = ""; // b는 never