import { useState } from "react";
import RadioButton from "./RadioButton";

const UseCallBack = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const radioButtons = [...Array(10000)];

  return (
    <div className="radio-list">
      {radioButtons.map((_, id) => {
        const value = `radio${id}`;
        const isChecked = selectedValue === value;

        return (
          <RadioButton
            key={id}
            value={value}
            id={`${id}`}
            checked={isChecked}
            onChange={(value) => {
              setSelectedValue(value);
            }}
          />
        );
      })}
    </div>
  );
};

export default UseCallBack;
