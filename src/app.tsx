import "./styles.css";
import { useReducer, useState } from "preact/compat";
import Rune from "../assets/lordrune.png";
import { allRunes } from "./constants/runes";
import { disallowNonNumbers } from "./utils/inputHelpers";

export default function App() {
  const [total, dispatch] = useReducer((state, action) => {
    if (action === "reset") {
      return 0;
    }
    // @ts-ignore
    if (state <= 0 && action <= 0) {
      return 0;
    }
    // @ts-ignore
    return state + action;
  }, 0);

  const [runeCount, setCount] = useState<{ [id: number]: number }>({});
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();
  const [targetRuneCount, setTargetRuneCount] = useState<Undefinable<number>>();

  const increment = (souls: number, id: number) => () => {
    dispatch(souls);
    if (runeCount[id]) {
      setCount({ ...runeCount, [id]: runeCount[id] + 1 });
    } else {
      setCount({ ...runeCount, [id]: 1 });
    }
  };

  const decrease = (souls: number, id: number) => () => {
    if (!total) return;

    dispatch(-souls);
    if (runeCount[id]) {
      setCount({ ...runeCount, [id]: runeCount[id] - 1 });
    }
    if (runeCount[id] <= 0) {
      const newCounts = { ...runeCount };
      setCount(newCounts);
    }
  };

  const reset = () => {
    dispatch("reset");
    setCount({});
    setHeldRuneCount(0);
    setTargetRuneCount(0);
  };

  return (
    <div id="calc" className="App">
      <img src={Rune} className="runeimage" alt="image of a golden rune" />
      <div>
        <label>
          Number of Currently Held Runes
          <input
            name="heldRunes"
            type="number"
            className="heldRunes"
            onKeyDown={disallowNonNumbers}
            value={heldRuneCount}
            onChange={(event) => {
              // @ts-ignore
              if (event?.target?.value) {
                // @ts-ignore
                setHeldRuneCount(event.target.value);
              } else {
                setHeldRuneCount(0);
              }
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Desired Target # of Runes
          <input
            name="heldRunes"
            type="number"
            className="heldRunes"
            onKeyDown={disallowNonNumbers}
            value={targetRuneCount}
            onChange={(event) => {
              // @ts-ignore
              if (event?.target?.value) {
                // @ts-ignore
                setTargetRuneCount(event.target.value);
              } else {
                setTargetRuneCount(0);
              }
            }}
          />
        </label>
      </div>

      {allRunes.map(({ id, label, soulsGiven }) => (
        <div className="flex spaced">
          <span>{label}</span>
          <button onClick={increment(soulsGiven, id)}>+</button>
          <button disabled={!runeCount[id]} onClick={decrease(soulsGiven, id)}>
            -
          </button>
          {runeCount[id] > 0 && (
            <span className="fixed nomargin">total: {runeCount[id]}</span>
          )}
        </div>
      ))}
      <h2>total: {total}</h2>
      <button onClick={reset}>reset</button>
      <footer className="bottom small-text">
        Contribute to the code{" "}
        <a target="_blank" href="https://github.com/sergnio/golden-rune-calc">
          here
        </a>
        !
      </footer>
    </div>
  );
}
