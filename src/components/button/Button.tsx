import React, { FC } from "react";
import styled from "styled-components";

interface IPropsButton {
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const CustomButton = styled.button`
  margin: 10px;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 3px;
`;

const Button: FC<IPropsButton> = ({
  onClick,
  disabled,
  title,
  type = "button",
}) => {
  return (
    <CustomButton disabled={disabled} onClick={onClick} type={type}>
      {title}
    </CustomButton>
  );
};

export default Button;
