{
  /**
   * Type Aliases
   * 내가 타입을 직접 정의 할 수 있다
   */

  // Text 라는 새로운 타입을 지정
  type Text = string;
  const name: Text = 'kang';
  const address: Text = 'incheon';

  type Num = number;

  // 타입 커스텀 가능
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'kang',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let kangName: Name;
  kangName = 'name'; // 'name' 만 할당 가능
}
