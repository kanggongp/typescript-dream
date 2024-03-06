{
  // JavaScript
  // let -> 재할당 가능
  let name = 'hello';
  name = 'hi';

  // const
  const ageConst = 5;

  // number - > 소수점도 가능
  const number: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined -> 값이 없는지 있는지 명확하게 모를 때
  // number 혹은 undefined
  let age: number | undefined;

  // 리턴값을 number 혹은 undefined 로 지정 가능
  function find(): number | undefined {
    return undefined;
  }

  // undefined null 은 단독으로  사용하지는 않는다 보통

  // null -> 값이 명확하게 없는 경우 사용
  let person: string | null;

  // unknown -> 알 수 없는 타입 가능한 사용하지 않으면 좋다
  let notSure: unknown = 0;
  notSure = 'hi';

  // any -> 어느 것이든 할당이 가능하다
  let anyThing: any = 0;
  anyThing = 'hello';

  // void : 보통 함수에 많이 사용
  function print(): void {
    console.log('error!');
    return;
  }

  // never -> 아무것도 리턴하지 않는 경우
  function throwError(message: string): never {
    // 서버에 에러 로그를 전송하는 용도로 사용
    throw new Error(message);

    // 혹은 while 무한 반복하는 경우
  }

  // object
  let data: object;

  // 여러가지 타입 인자로 가능
  function acceopObject(data: object) {}

  acceopObject({ name: 'hi' });
  acceopObject({ age: 12 });
}
