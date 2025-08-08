import * as RadioGroup from "@radix-ui/react-radio-group";
import '../RadioButton/styles.css'

export function RadioButtonComponent({
  value,
  inputName,
  checked,
}: {
  value: string;
  inputName: string;
  checked: boolean
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }} >
      <RadioGroup.Item
        className="RadioGroupItem"
        value={value}
        id={inputName}
        checked={checked}
      >
        <RadioGroup.Indicator className="RadioGroupIndicator" />
      </RadioGroup.Item>
      <label className="Label" htmlFor={inputName}>
        {value}
      </label>
    </div>
  );
}
