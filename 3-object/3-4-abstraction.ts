{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeCup;
  }

  interface CoffeMakerPro {
    makeCoffee(shots: number): CoffeCup;
    fillCoffeBeans(num: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeMaker, CoffeMakerPro {
    private static PER_SHOT = 7;
    private coffeBeans: number = 0;

    private constructor(shotNum: number) {
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

  class AmaCoffeeMachine {
    constructor(private machine: CoffeMaker) {}

    makeCoffe() {
      const coffee = this.machine.makeCoffee(1);
      console.log(`ama makeCoffe ${coffee}`);
    }
  }

  class ProCoffeeMachine {
    constructor(private machine: CoffeMakerPro) {}

    makeCoffe() {
      const coffee = this.machine.makeCoffee(2);
      console.log(`pro makeCoffee ${coffee}`);

      this.machine.fillCoffeBeans(2);
      this.machine.clean();
    }
  }

  const coffee = CoffeeMachine.makeMachine(32);

  const ama1Coffe = new AmaCoffeeMachine(coffee);
  const pro1Coffe = new ProCoffeeMachine(coffee);

  ama1Coffe.makeCoffe();
  pro1Coffe.makeCoffe();
}
