// 차별화하는 구별화 하는
// union 타입을 사용할 떄 공통 속성이 있어야 나중에 처리하기가 편하다 -> result 속성
type SuccessState = {
  result: 'success';
  response: {
    body: string;
  };
};

type FailedState = {
  result: 'fail';
  reason: string;
};

type Response2 = SuccessState | FailedState;

const loginResponse = loginCheck(0);

const printLoginState = (state: Response2) => {
  if (state.result === 'success') {
    console.log(state.response);
  } else {
    console.log(state.reason);
  }
};
