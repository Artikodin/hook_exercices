import { useState } from "react";
import AnimatedDiv from "./AnimatedDiv";

const expensiveComputation = () => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1000) {
    // Do nothing for 1000 ms to emulate extremely slow code
  }
};

const UseMemo = () => {
  const [color, setColor] = useState<string | null>(null);
  const radioButtons = ["red", "blue"];

  const handleClick = (_color: string) => {
    expensiveComputation();
    setColor(_color);
  };

  return (
    <>
      <div className="radio-list">
        {radioButtons.map((_color) => {
          return (
            <button key={_color} onClick={() => handleClick(_color)}>
              {_color}
            </button>
          );
        })}
      </div>

      <AnimatedDiv color={color} />
    </>
  );
};

export default UseMemo;
