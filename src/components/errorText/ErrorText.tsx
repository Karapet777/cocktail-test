import React, { FC } from "react";
import styled from "styled-components";

export const stylesErrorText = {
  ErrorText: styled.span`
    color: red;
    font-size: 14px;
  `,
};

const ErrorText: FC<any> = ({ textError }) => {
  const { ErrorText } = stylesErrorText;
  return <ErrorText>{textError}</ErrorText>;
};

export default ErrorText;
