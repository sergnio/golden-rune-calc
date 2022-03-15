import { RuneLabel } from "../constants/runes";

interface CalcReturn {
  runes: InventoryRune[];
  difference?: number;
}

/**
 * Returns the amount of each rune you should consume
 * @param currentCount currently owned # of souls
 * @param desiredAmount how many you're trying to get to
 * @param soulsOwned the actual runes in your inventory that you own and want to use
 */
export const calculateHighestFirst = (
  currentCount: number,
  desiredAmount: number,
  soulsOwned: InventoryRune[]
): CalcReturn => {
  /*
  Algorithm:
  while currentCount < desiredAmount:
    if soulsOwned = [] throw Error

    get the highest soul rune they own that keeps currentCount < desired amount
    if there isn't a soul rune that keeps count < desired amount, get the smallest one that goes over (or =)

    remove from souls owned and add to returnList
  return returnList

  future: if currentCount < desired amount && soulsLeft.length === 0, also return the difference
  * */
  let count = currentCount;
  let returnRunes: InventoryRune[] = [];
  const runes: InventoryRune[] = [...soulsOwned];

  while (count < desiredAmount) {
    if (runes === [])
      return { runes: returnRunes, difference: desiredAmount - count };

    let foundRune: Undefinable<InventoryRune>;

    // checks if the passed in rune + current count is less than our goal
    let isWithin = (rune: Rune) => rune.soulsGiven + count <= desiredAmount;

    runes.forEach((rn) => {
      if (
        // if we haven't yet found a rune and it's within the limits and we have at least 1
        (!foundRune && isWithin(rn) && rn.count > 0) ||
        // if we've found a new rune that's greater than our current and it's within the limits and we have at least 1
        (foundRune &&
          rn.soulsGiven > foundRune.soulsGiven &&
          isWithin(rn) &&
          rn.count > 0)
      )
        // then it's our new rune!
        foundRune = rn;
    });

    // if we haven't found a rune, that means that means all runes take us over the limit...
    // need to find the smallest one
    if (!foundRune) {
      runes.forEach((rn) => {
        if (
          // if we haven't yet found one and we have at least one of this type
          (!foundRune && rn.count > 0) ||
          // if we have found one and it gives fewer souls than our current rune use it
          // we already know all runes already go over the max
          (foundRune && rn.soulsGiven < foundRune.soulsGiven && rn.count > 0)
        )
          foundRune = rn;
      });
    }
    // remove a rune of that count
    if (foundRune) foundRune.count -= 1;
  }
  return {
    runes: returnRunes,
    difference: desiredAmount - count,
  };

  // return [
  //   {
  //     id: 2,
  //     label: RuneLabel.GoldenRune2,
  //     soulsGiven: 400,
  //   },
  // ];
};
