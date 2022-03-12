import "./styles.css";
import { useReducer, useState } from "preact/compat";
import Rune from "../assets/lordrune.png";

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

  const [runeCount, setCount] = useState({});

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

  console.log({ runeCount });

  // @ts-ignore
  const increment = (souls, key) => () => {
    console.log({ key });
    dispatch(souls);
    // @ts-ignore
    if (runeCount[key]) {
      // @ts-ignore
      setCount({ ...runeCount, [key]: runeCount[key] + 1 });
    } else {
      setCount({ ...runeCount, [key]: 1 });
    }
  };

  // @ts-ignore
  const decrease = (souls, key) => () => {
    if (!total) return;

    dispatch(-souls);
    // @ts-ignore
    if (runeCount[key]) {
      // @ts-ignore
      setCount({ ...runeCount, [key]: runeCount[key] - 1 });
    }
    // @ts-ignore
    if (runeCount[key] <= 0) {
      const newCounts = { ...runeCount };
      setCount(newCounts);
    }
  };
  // {runes[key]}
  const reset = () => {
    dispatch("reset");
    setCount({});
  };

  return (
    <div id="calc" className="App">
      <img src={Rune} className="runeimage" />
      {Object.keys(runes).map((key) => (
        <div className="flex spaced">
          Golden Rune ({key}){/*@ts-ignore*/}
          <button onClick={increment(runes[key], key)}>+</button>
          {/*@ts-ignore*/}
          <button onClick={decrease(runes[key], key)}>-</button>
          {/*@ts-ignore*/}
          {runeCount[key] > 0 && (
            // @ts-ignore
            <span className="fixed nomargin">total: {runeCount[key]}</span>
          )}
        </div>
      ))}
      <h2>total: {total}</h2>
      <button onClick={reset}>reset</button>
    </div>
  );
}
