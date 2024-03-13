{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
    sugar?: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  class CoffeeMachine implements CoffeMaker {
    private static PER_SHOT = 7;
    private coffeBeans: number = 0;

    constructor(shotNum: number) {
      this.coffeBeans = shotNum;
    }

    static makeMachine(num: number): CoffeeMachine {
      return new CoffeeMachine(num);
    }

    fillCoffeBeans(num: number) {
      if (num < 0) {
        throw new Error('this value is not valid!');
      }

      this.coffeBeans += num;
    }

    grindBeans(shots: number) {
      if (this.coffeBeans < shots * CoffeeMachine.PER_SHOT) {
        throw new Error('Not enough beans!');
      }

      this.coffeBeans -= shots * CoffeeMachine.PER_SHOT;
    }

    preheat(): void {
      console.log('heating up!!');
    }

    clean(): void {
      console.log('cleaning!!');
    }

    extract(shots: number): CoffeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);

      console.log('make sugar!!');

      return {
        ...coffee,
        sugar: true,
      };
    }
  }

  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(shotNums: number, public readonly serialNum: string) {
      super(shotNums);
    }

    private steamMilk(): void {
      console.log('steaming milk..!');
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);

      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  // const lattee = CoffeeLatteMachine.makeMachine(32);
  // const latteeMachine = new CoffeeLatteMachine(32, 'gong');
  // const result = latteeMachine.makeCoffee(1);

  // const sweetMachine = new SweetCoffeeMaker(12);
  // const sweetCoffee = sweetMachine.makeCoffee(1);
  // console.log(sweetCoffee);

  const machineArr = [
    new CoffeeMachine(10),
    new CoffeeLatteMachine(20, 'kang'),
    new SweetCoffeeMaker(30),
  ];

  machineArr.forEach((machine) => {
    console.log('----------------------');
    machine.makeCoffee(1);
  });
}
