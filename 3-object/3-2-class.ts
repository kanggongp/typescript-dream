{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class MakeCoffe {
    static PER_SHOT = 7;
    coffeBeans: number = 0;

    constructor(shotNum: number) {
      this.coffeBeans = shotNum;
    }

    static makeMachine(num: number): MakeCoffe {
      return new MakeCoffe(num);
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

  const coffee = new MakeCoffe(23);
  console.log(coffee);

  const coffee2 = MakeCoffe.makeMachine(10);
  console.log(coffee2);
}
