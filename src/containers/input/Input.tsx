import React, { FC, FocusEventHandler } from "react";
import { styleInput } from "./Input.style.component";

interface inputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  value?: string | undefined;
  type: string;
  checked?: boolean;
  name?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
}

const Input: FC<inputProps> = ({
  onChange,
  type = "text",
  placeholder,
  value,
  checked,
  name,
  onBlur,
}) => {
  const { CustomInput } = styleInput;
  return (
    <CustomInput
      onChange={onChange}
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      checked={checked}
      name={name}
      onBlur={onBlur}
    />
  );
};

export default Input;
