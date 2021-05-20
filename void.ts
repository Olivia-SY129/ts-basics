function returnVoid(msg: string) {
  console.log(msg);

  return; // return 값은 undefined만 가능!
}

const r = returnVoid('no return'); // void, 다른 변수 지정 불가
// const nr:undefined = returnVoid('no return'); // void, 다른 변수 지정 불가
