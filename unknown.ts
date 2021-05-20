// application을 작성할 때 모르느 변수 타입을 묘사할 수도 있음
// 사용자나 api의 모든 값을 받기 위해 사용
// 변수가 무엇이든 될 수 있을 때 unknown을 사용
// complier가 type을 추론할 수 있도록 유형을 좁히거나,
// type을 확정한 이후에 사용 가능 ->  any와 차이점 
// 따라서 더 안전함

declare const maybe: unknown;

// const aNumber: number = maybe; // (x)

if (maybe === true) {
  const aBoolean: boolean = maybe;
  // 이 scope 에서는 무조건 true인 값만 가능,
  // boolean type 외 사용 불가
}

if (typeof maybe === 'string') {
  const aString: string = maybe; // string
}