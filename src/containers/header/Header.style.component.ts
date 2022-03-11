import styled from "styled-components";

export const styleHeader = {
  WrapperHeader: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px, 25px;
    background-color: blueviolet;
    color: rgb(127, 208, 255);
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 17px;
  `,
  LogoBlock: styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
  `,
  SettingBlock: styled.div`
    display: flex;
    align-items: center;
  `,
  CurrentUserName: styled.p`
    margin-left: 13px;
  `,
  UserIcon: styled.img`
    width: 27px;
  `,
};
