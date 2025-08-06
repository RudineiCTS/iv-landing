import * as React from "react";
import { RadioGroup } from "radix-ui";
import "./styles.css";

interface RadioButtonProps {
	value:string,
	inputName:string
}

export function RadioButtonComponent({value, inputName}:RadioButtonProps){
  return (
    <>
    <RadioGroup.Root
			className="RadioGroupRoot"
			defaultValue="default"
			aria-label="View density"
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className="RadioGroupItem" value="default" id={inputName}>
					<RadioGroup.Indicator className="RadioGroupIndicator" />
				</RadioGroup.Item>
				<label className="Label" htmlFor={inputName}>
					{value}
				</label>
			</div>
		</RadioGroup.Root>
    </>
  )
}
    