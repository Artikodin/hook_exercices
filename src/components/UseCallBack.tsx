import { useState } from "react";
import RadioButton from "./RadioButton";

const UseCallBack = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const radioButtons = [...Array(10)];

  return (
    <div className="radio-list">
      {radioButtons.map((_, id) => {
        const value = `radio${id}`;
        const isChecked = selectedValue === value;

        const handleChange = (value: string) => {
          setSelectedValue(value);
        };

        return (
          <RadioButton
            key={id}
            value={value}
            checked={isChecked}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default UseCallBack;
