import "./styles.css";
import { useReducer, useState } from "preact/compat";
import Rune from "../assets/lordrune.png";
import { allRunes } from "./constants/runes";

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
  const [heldRuneCount, setHeldRuneCount] = useState<number>(0);
  console.log("runeCount", runeCount);

  const runes = {
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
  };

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
  };

  return (
    <div id="calc" className="App">
      <img src={Rune} className="runeimage" />
      <label>
        Number of currently held runes
        <input
          name="heldRunes"
          type="number"
          className="heldRunes"
          onChange={}
        />
      </label>

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
      <footer className={"bottom"}>
        Contribute to the code{" "}
        <a target="_blank" href="https://github.com/sergnio/golden-rune-calc">
          here
        </a>
        !
      </footer>
    </div>
  );
}
