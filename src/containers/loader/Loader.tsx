import React from "react";
import LoderIcon from "./../../assets/loderIcon.png";
import { stylesLoader } from "./Loder_style.component";

const Loader = () => {
  const { LoderImg, LoderBlock } = stylesLoader;

  return (
    <LoderBlock>
      <LoderImg src={LoderIcon} alt="LoderIcon" />
    </LoderBlock>
  );
};

export default Loader;
