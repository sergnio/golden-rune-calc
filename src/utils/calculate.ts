import { RuneLabel } from "../constants/runes";

/**
 * Returns the amount of each rune you should consume
 * @param currentCount
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
