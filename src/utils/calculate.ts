import { RuneLabel } from "../constants/runes";

interface Props {
  currentCount: number;
  desiredAmount: number;
  soulsOwned: OwnedRune[];
}

/**
 * Returns the amount of each rune you should consume
 * @param currentCount
 */
export const calculateHighestFirst = ({
  currentCount,
  desiredAmount,
  soulsOwned,
}: Props): Rune[] => {
  return [
    {
      id: 2,
      label: RuneLabel.GoldenRune2,
      soulsGiven: 400,
    },
  ];
};
