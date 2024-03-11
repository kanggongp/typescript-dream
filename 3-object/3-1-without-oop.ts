{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  let coffeBeans: number = 0;
  const PER_SHOT = 7;

  function makeCoffe(shots: number): CoffeCup {
    if (coffeBeans < shots * PER_SHOT) {
      throw new Error('Not enough beans!');
    }

    coffeBeans -= shots * PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeBeans += 3 * PER_SHOT;

  const result = makeCoffe(2);
  console.log(result);
}
