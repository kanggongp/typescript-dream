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

  // steaming 기능을 가진 클래스를 따로 만들다
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log('steaming some milk!!');
    }

    makeMilk(cup: CoffeCup): CoffeCup {
      this.steamMilk();

      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // sugar 을 추가하는 클래스를 따로 만든다
  class AutomaticSugarMix {
    private getSugar() {
      console.log('get some sugar from jar!!');
      return true;
    }

    addSugar(cup: CoffeCup): CoffeCup {
      const sugar = this.getSugar();

      return {
        ...cup,
        sugar: sugar,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(shotNum: number, private sugarMix: AutomaticSugarMix) {
      super(shotNum);
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);

      return this.sugarMix.addSugar(coffee);
    }
  }

  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(
      shotNums: number,
      public readonly serialNum: string,
      private milkFork: CheapMilkSteamer
    ) {
      super(shotNums);
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);
      const milkCoffee = this.milkFork.makeMilk(coffee);

      return milkCoffee;
    }
  }

  // compositon 활용한 방법
  class SweetLatteCoffeeMachine extends CoffeeMachine {
    constructor(
      private shotNum: number,
      private milkFork: CheapMilkSteamer,
      private sugarFork: AutomaticSugarMix
    ) {
      super(shotNum);
    }

    makeCoffee(shots: number): CoffeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugarFork.addSugar(coffee);

      return this.milkFork.makeMilk(sugarAdded);
    }
  }

  // const machineArr = [
  //   new CoffeeMachine(10),
  //   new CoffeeLatteMachine(20, 'kang'),
  //   new SweetCoffeeMaker(30),
  // ];

  // machineArr.forEach((machine) => {
  //   console.log('----------------------');
  //   machine.makeCoffee(1);
  // });
}
