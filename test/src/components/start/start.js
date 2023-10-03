import { useState } from "react";
import "./start.css";

const Start = () => {
  const woods = ["smile1", "smile2", "smile3", "smile4"];
  const [counters, setCounters] = useState({
    smile1: 0,
    smile2: 0,
    smile3: 0,
    smile4: 0,
  });

  const result = woods.map((el, index) => (
    <p
      onClick={() => {
        const result = counters.with(index, counters[index] + 1);
        setCounters(result);
      }}
    >
      {el} : {counters[index]}
    </p>
  ));

  return <div>{result}</div>;
};
export default Start;
