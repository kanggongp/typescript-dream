{
  /*
  상수 정의 할 때 사용
  타입스크립트는 자체적으로 지원한다
  */

  // enum 에 값을 따로 지정하지 않으면 자동으로 0 부터 부여가 된다
  enum Days {
    Moday, // 0
    Tuesday, // 1
    Wednesday, // 2
  }

  // 부여한 경우
  enum Days2 {
    Moday = 1, // 1
    Tuesday, // 2
    Wednesday, // 3
  }

  console.log(Days.Moday);
  console.log(Days2.Moday);

  // 하지만 타입스크립트 에서는 enum 을 사용하지 않는게 좋다 -> 타입이 보장되지 않는 경우가 있다

  // 이런식으로 사용하는 것이 좋다 -> 타입이 보장된다
  type Days3 = 'Monday' | 'Tuesday' | 'Wednesday';
}
