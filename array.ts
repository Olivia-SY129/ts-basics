// JSX, TSX에서 충돌남
let list: Array<number>;
list = [1, 2, 3, 4, 5];

// 선호되는 방법
let num: string[] = ["Jan", "Feb", "Mar"];

// 여러 타입을 나열하기
let diffType: (number | string)[] = [1, 2, 3, "Jan", "Feb", "Mar"];

