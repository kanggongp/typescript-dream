type DataModel = {
  name: string;
  age: number;
};

function addFunction(): DataModel {
  const result = {
    name: 'kang',
    age: 10,
  };

  console.log('result!');
  return result;
}

function addFunction2(): number {
  const num = 10;
  return num;
}

function addNumbers2(...numberArr: number[]): number {
  return numberArr.reduce((a, b) => a + b);
}

function add2(first: number): number {
  const data = first + 10;

  return data;
}

function print2(first: number, second?: string) {
  const data = first + 20;

  if (second) {
    return `${second} second 존재`;
  } else {
    return 'first 만 존재';
  }
}

console.log(add2(1));
console.log(print2(2));
console.log(print2(3, 'hi'));
