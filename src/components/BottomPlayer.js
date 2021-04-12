import React from "react";
import "./BottomPlayer.css";

import bottomPlayer__icon from "../images/BottomPlayer__icon.jpg";

import {
  PlayCircle,
  ArrowRepeatAll,
} from "@styled-icons/fluentui-system-filled";
import {
  SkipPrevious,
  SkipNext,
  Shuffle,
} from "@styled-icons/boxicons-regular";

const BottomPlayer = () => {
  return (
    <div className="bottomPlayer">
      <div className="bottomPlayer__container">
        <div className="bottomPlayer-cont__div">
          <div className="bottomPlayer-cont-1_detailsSec bottomPlayer-cont-1_sections">
            <div className="bottomPlayer-cont-1-1_imageSec bottomPlayer-cont-1-1_sections">
              <img src={bottomPlayer__icon} alt={""} />
            </div>
            <div className="bottomPlayer-cont-1-1_detailSec bottomPlayer-cont-1-1_sections">
              <h6>{"Song Name"}</h6>
              <p>{"Song Author"}</p>
            </div>
          </div>

          <div className="bottomPlayer-cont-1_playerSec bottomPlayer-cont-1_sections">
            <div className="bottomPlayer-cont-1-2_toolsSec">
              <Shuffle className="bottomPlayer-cont-1-2-1_rest" />
              <SkipPrevious className="bottomPlayer-cont-1-2-1_skip" />
              <PlayCircle className="bottomPlayer-cont-1-2-1_play" />
              <SkipNext className="bottomPlayer-cont-1-2-1_skip" />
              <ArrowRepeatAll className="bottomPlayer-cont-1-2-1_rest" />
            </div>
            <div className="bottomPlayer-cont-1-2_controlSec"></div>
          </div>

          <div className="bottomPlayer-cont-1_toolsSec bottomPlayer-cont-1_sections"></div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
