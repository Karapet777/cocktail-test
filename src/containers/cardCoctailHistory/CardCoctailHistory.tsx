import React, { FC } from "react";
import { CardCoctailHistoryStyle } from "./CardCoctailHistory.style.component";
import { IProps } from "./interfaces";
import { FaRegTrashAlt } from "react-icons/fa";

const CardCoctailHistory: FC<IProps> = ({
  src,
  name,
  glass,
  Alcoholic,
  deleteCoctailHandle,
}) => {
  const { ImgCardHistory, WrapperCardHistory } = CardCoctailHistoryStyle;
  return (
    <WrapperCardHistory>
      <div>
        <ImgCardHistory className="imgCardHistory" src={src} alt={name} />
      </div>
      <div>
        <p>Name -{name}</p>
        <p>Glasss- {glass}</p>
        <p>Category- {Alcoholic}</p>
      </div>
      <div>
        <FaRegTrashAlt onClick={deleteCoctailHandle} />
        {/* <button onClick={deleteCoctailHandle}>delete</button> */}
      </div>
    </WrapperCardHistory>
  );
};

export default CardCoctailHistory;
