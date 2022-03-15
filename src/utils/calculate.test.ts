import { calculateHighestFirst } from "./calculate";
import { getRuneByName, RuneLabel } from "../constants/runes";

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

/*
  0 souls
  want 400
  have 1 single Golden Rune (2)
  should return 1x Golden Rune (2)
*/
it("should output", () => {
  const result = calculateHighestFirst(0, 400, [
    { ...getRuneByName(RuneLabel.GoldenRune2), count: 1 },
  ]);

  expect(result).toStrictEqual([
    {
      ...getRuneByName(RuneLabel.GoldenRune2),
      count: 1,
    },
  ]);
});

it("should do stuff", () => {
  calculateHighestFirst(100, 10000, [
    {
      id: 1,
      label: RuneLabel.GoldenRune1,
      soulsGiven: 200,
      count: 30,
    },
    {
      id: 2,
      label: RuneLabel.GoldenRune2,
      soulsGiven: 400,
      count: 10,
    },
  ]);
});

/*
 * 0 Souls
 * Want 100 souls
 * Have no runes
 * should return no runes and a difference of 100
 * */
it("Should should return no runes and a difference of 100", () => {
  const startSouls = 0;
  const neededSouls = 100;
  const runesOwned: InventoryRune[] = [];
  expect(() => {
    calculateHighestFirst(startSouls, neededSouls, runesOwned);
  }).toEqual();
});
