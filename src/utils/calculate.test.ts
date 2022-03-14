import { calculateHighestFirst } from "./calculate";
import { RuneLabel } from "../constants/runes";

/*
    1: 200,
    2: 400,
    3: 800,
    4: 1200,
    5: 1600,
    6: 2000,
    7: 2500,
    8: 3000,
    9: 3800,
    10: 5000,
    11: 6200,
    12: 7500,
 */

it("should output", () => {
  const result = calculateHighestFirst({
    currentCount: 0,
    desiredAmount: 400,
    soulsOwned: [{ id: 2 }],
  });
  expect(result).toStrictEqual([
    {
      id: 2,
      label: RuneLabel.GoldenRune2,
      soulsGiven: 400,
    },
  ]);
});

/*
0 souls
want 400
have a 2
should return 1 2

 */
