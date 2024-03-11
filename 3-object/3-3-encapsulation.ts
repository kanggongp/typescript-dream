{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class MakeCoffe {
    private static PER_SHOT = 7;
    private coffeBeans: number = 0;

    private constructor(shotNum: number) {
      this.coffeBeans = shotNum;
    }

    static makeMachine(num: number): MakeCoffe {
      return new MakeCoffe(num);
    }

    fillCoffeBeans(num: number) {
      if (num < 0) {
        throw new Error('this value is not valid!');
      }

      this.coffeBeans += num;
    }

    makeCoffe(shots: number): CoffeCup {
      if (this.coffeBeans < shots * MakeCoffe.PER_SHOT) {
        throw new Error('Not enough beans!');
      }

      this.coffeBeans -= shots * MakeCoffe.PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  class User {
    private internalAge = 10;
    get fullName(): string {
      return `${this.name} ${this.second}`;
    }

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('num is not valid');
      }
      this.internalAge = num;
    }

    constructor(private name: string, private second: string) {}
  }
  const user = new User('gong', 'park2');
  console.log(user);
  console.log(user.fullName);
  console.log(user.age);
  user.age = 20;
  console.log(user.age);
}
