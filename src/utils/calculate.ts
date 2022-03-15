import { RuneLabel } from "../constants/runes";

/**
 * Returns the amount of each rune you should consume
 * @param currentCount currently owned # of souls
 * @param desiredAmount how many you're trying to get to
 * @param soulsOwned the actual runes in your inventory that you own and want to use
 */
export const calculateHighestFirst = (
  currentCount: number,
  desiredAmount: number,
  soulsOwned: OwnedRune[]
): Rune[] => {
  return [
    {
      id: 2,
      label: RuneLabel.GoldenRune2,
      soulsGiven: 400,
    },
  ];
};
