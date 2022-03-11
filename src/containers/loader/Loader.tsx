import React from "react";
import LoderIcon from "./../../assets/loderIcon.png";
import { stylesLoader } from "./Loder_style.component";
// @ts-ignore
import audio from "../../assets/audio_shacer.mp3";
import { LoadingSelect } from "../../redux/coctail/selectCoctail";

const Loader = () => {
  const { LoderImg, LoderBlock } = stylesLoader;
  const loading = LoadingSelect();

  return (
    <LoderBlock>
      <LoderImg src={LoderIcon} alt="LoderIcon" />
      <div style={{ display: "none" }}>
        <audio controls autoPlay={loading}>
          <source src={audio} type="audio/mp3" />
        </audio>
      </div>
    </LoderBlock>
  );
};

export default Loader;
