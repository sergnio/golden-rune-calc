import "./styles.css";
import { useReducer, useState } from "preact/compat";

export default function App() {
  const [total, dispatch] = useReducer((state, action) => {
    if (action === "reset") {
      return 0;
    }
    if (state <= 0 && action <= 0) {
      return 0;
    }
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

  const increment = (souls, key) => () => {
    console.log({ key });
    dispatch(souls);
    if (runeCount[key]) {
      setCount({ ...runeCount, [key]: runeCount[key] + 1 });
    } else {
      setCount({ ...runeCount, [key]: 1 });
    }
  };

  const decrease = (souls, key) => () => {
    if (!total) return;

    dispatch(-souls);
    if (runeCount[key]) {
      setCount({ ...runeCount, [key]: runeCount[key] - 1 });
    }
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
    <div className="App">
      {Object.keys(runes).map((key) => (
        <div className="flex spaced">
          Golden Rune ({key})
          <button onClick={increment(runes[key], key)}>+</button>
          <button onClick={decrease(runes[key], key)}>-</button>
          {runeCount[key] > 0 && (
            <span className="fixed">total: {runeCount[key]}</span>
          )}
        </div>
      ))}
      <div>total: {total}</div>
      <button onClick={reset}>reset</button>
    </div>
  );
}
