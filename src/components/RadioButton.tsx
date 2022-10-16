import "./RadioButton.css";

type Props = {
  value: string;
  id: string;
  checked?: boolean;
  onChange: (value: string) => void;
};

const RadioButton = ({ value, id, checked, onChange }: Props) => {
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

export default RadioButton;
