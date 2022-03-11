import React, { FC } from "react";
import { stylesCardCoctail } from "./Card.style.component";
import { IProps } from "./interfaces";
import likeIcon from "../../assets/likeIcon.png";
import nextIcon from "../../assets/nextIcon.png";
import { useTranslation } from "react-i18next";

const CardCoctail: FC<IProps> = ({
  src,
  name,
  glass,
  Alcoholic,
  addCoctailToHistory,
  newRandomCoctailInModal,
}) => {
  const {
    CardInfoBlock,
    CardCoctailImg,
    CardButtonBlock,
    TitleInfoCoctail,
    LikeIcon,
    InfoCoctailBlock,
    WrapperCardCoctail,
    InfoBlock,
  } = stylesCardCoctail;
  const { t } = useTranslation();

  return (
    <WrapperCardCoctail>
      <CardInfoBlock>
        <div className="cardCoctailImg">
          <CardCoctailImg src={src} alt="name" />
        </div>
        <InfoCoctailBlock>
          <InfoBlock>
            <TitleInfoCoctail>{t("name")}</TitleInfoCoctail> {name}
          </InfoBlock>
          <InfoBlock>
            <TitleInfoCoctail>{t("glass")}</TitleInfoCoctail>
            {glass}
          </InfoBlock>
          <InfoBlock>
            <TitleInfoCoctail>{t("type")}</TitleInfoCoctail>
            {Alcoholic}
          </InfoBlock>
        </InfoCoctailBlock>
      </CardInfoBlock>
      <CardButtonBlock>
        <LikeIcon
          src={likeIcon}
          alt="likeIcon"
          onClick={() => addCoctailToHistory()}
        />
        <LikeIcon
          src={nextIcon}
          alt="nextIcon"
          onClick={() => newRandomCoctailInModal()}
        />
      </CardButtonBlock>
    </WrapperCardCoctail>
  );
};

export default CardCoctail;
