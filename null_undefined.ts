// In TypeScript, both undefined and null actually have
// their types named undefined and null respectively.
// Much like void, they're not extremely useful on their own.
// only lowercase

let u: undefined = undefined;
let n: null = null;

// undefined & null are subtypes of all other types.
// when compiling, use '--strictNullChecks' 
// -> void나 자기 자신에게만 할당 가능
// -> 이경우 null과 undefined를 할당할 수 있게 하려면,
// **union type을 이용해야 함.
// tsconfig.json에서 "strict": true를 주석처리

// let nullName: string = null; (x)
// let age: number = undefined; (x)
// let u: undefined = null; // (x)
// let name: string = null; (x)

// strictNullChecks => true
// Type 'null' is not assignable to type 'string'.

// null => null || void, undefined => undefined || void
// Type 'null' is not assignable to type 'undefined'.

let v: void = undefined; // (o)

let union: string | null | undefined = 'str';
