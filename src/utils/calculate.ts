interface Props {
  currentCount: number;
  desiredAmount: number;
  soulsOwned: Rune[];
}

/**
 * Returns the amount of each rune you should consume
 * @param currentCount
 */
export const calculateHighestFirst = ({ currentCount }: Props): Rune[] => {
  return [{ label: "" }];
};
