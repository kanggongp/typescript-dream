{
    // Array
    const fruits: string[] = ['apple', 'banna'];
    const scroes: Array<number> = [1, 3, 4];

    // 읽기만 가능한 형태 -> 가독성이 좋다
    function printArray(fruits: readonly string[]){

    }

    // 기본적으로 배열의 요소에 접근할 때 인덱스로 접근하는 것은 나쁜 방법이다
    let student = ['kang', 'gong'];
    console.log(student[0]); // 무엇을 뜻하는지 모른다

    const student2 = {
        name: 'kang',
        age: 12,
    };

    console.log(student2.name); //이런식으로 클래스나 오브젝트 형태로 접근하는 것이 좋다

    // Tuple
    // 정해진 크기 배열 안에서 다른 타입을 담고 싶을 때 사용
    let student3: [string, number];
    student3 = ['name', 12];
    student3[0];
    student3[1];
    
    // object dectruct 를 이욯하면 더 좋음
    const [name, age] = student3;

    // tuple 사용예시 -> useState
    
    
}