import styled from "styled-components";

export const stylesCardCoctail = {
  WrapperCardCoctail: styled.div``,
  CardInfoBlock: styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  `,
  CardCoctailImg: styled.img`
    width: 350px;
    border-radius: 15px;
    box-shadow: 11px 13px 10px 2px rgba(34, 60, 80, 0.2);
  `,
  CardButtons: styled.button`
    width: 150px;
    border-radius: 5px;
    padding: 10px, 20px;
  `,
  CardButtonBlock: styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  `,
  TitleInfoCoctail: styled.span`
    color: white;
    margin-right: 20px;
    font-size: 20px;
  `,
  LikeIcon: styled.img`
    width: 60px;
    object-fit: cover;
  `,
  NextIcon: styled.img`
    width: 60px;
    object-fit: cover;
  `,
  InfoCoctailBlock: styled.div`
    background: coral;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 11px 13px 10px 2px rgba(34, 60, 80, 0.2);
  `,
  InfoBlock: styled.div`
  withe:100%
    display: flex;
    justify-content: space-between;
  `,
};
