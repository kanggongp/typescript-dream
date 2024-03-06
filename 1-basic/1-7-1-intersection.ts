{
  // intersection Types: and -> Union 이랑 완전히 반대 개념
  // 다양한 타입들을 하나로 묶어서 사용 가능

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  const internWork = (person: Student & Worker) => {
    console.log(person.name, person.empolyeeId, person.work());
  };

  internWork({
    name: 'kang',
    score: 12,
    empolyeeId: 1,
    work: () => {
      console.log('hi');
    },
  });
}
