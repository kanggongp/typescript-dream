{
  /*
  Type Inference
  */

  // return 타입 끼지 정확히 명시하는 것이 좋다 -> 원래 자동으로 추론은 해주지만 명시를 하는 것을 추천한다
  const addFunc = (x: number, y: number): number => {
    return x + y;
  };
}
