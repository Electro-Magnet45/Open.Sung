import React from "react";
import "./GridBox.css";
import { PlayCircleFill } from "@styled-icons/bootstrap";

const GridBox = ({ pfImage, title, author }) => {
  return (
    <div className="gridBox">
      <div className="gridBox_container">
        <div className="gridBox-cont_imgSec">
          <PlayCircleFill className="gridBox-cont-1_icon" />
          <img className="gridBox-cont-1_backImg" src={pfImage} alt="" />
        </div>

        <div className="gridBox-cont_infoSec">
          <h3>{title.length > 25 ? title.substr(0, 21) + "..." : title}</h3>
          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default GridBox;
