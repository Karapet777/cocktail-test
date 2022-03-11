import styled from "styled-components";

export const stylesLoader = {
  LoderImg: styled.img`
    width: 350px;
    animation: shake 0.9s ease-in;
    border: none;

    @keyframes shake {
      0% {
        transform: translate(0);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translate(0.8em);
      }
      10%,
      30%,
      50% {
        transform: translate(-0.2em);
      }
      70%,
      100% {
        transform: translate(0);
        transform: rotate(20deg);
      }
    }
  `,

  LoderBlock: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  `,
};
