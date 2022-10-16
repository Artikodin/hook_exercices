import { useId } from "react";
import "./RadioButton.css";

type Props = {
  value: string;
  checked?: boolean;
  onChange: (value: string) => void;
};

const RadioButton = ({ value, checked, onChange }: Props) => {
  const id = useId();

  return (
    <div className={`radio ${checked && "radio-active"}`}>
      <input
        type="radio"
        id={id}
        name="useCallback"
        value={value}
        /* checked={checked} */
        onChange={() => onChange(value)}
      />{" "}
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

RadioButton.displayName = "RadioButton";

export default RadioButton;
