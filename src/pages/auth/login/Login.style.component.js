import styled from "styled-components";

export const Style = {
  Wrapper: styled.div`
    width: 650px;
    height: 350px;
    backdrop-filter: blur(4px);
    border: 1px solid rgb(103, 188, 214);
    border-radius: 5px;
  `,
  BlockInput: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `,
  Title: styled.h3`
    color: white;
  `,
};
