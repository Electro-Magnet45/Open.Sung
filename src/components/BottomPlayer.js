import React, { useEffect, useState } from "react";
import "./BottomPlayer.css";

import bottomPlayer__icon from "../images/BottomPlayer__icon.jpg";

import { Slider } from "@material-ui/core";

import {
  PlayCircle,
  ArrowRepeatAll,
} from "@styled-icons/fluentui-system-filled";
import {
  SpeakerMute,
  Speaker1,
  Speaker2,
} from "@styled-icons/fluentui-system-regular";
import {
  SkipPrevious,
  SkipNext,
  Shuffle,
  Heart,
} from "@styled-icons/boxicons-regular";

const BottomPlayer = () => {
  const [durationPercentage, setDurationPercentage] = useState(0);
  const [nowDuration, setNowDuration] = useState(undefined);
  const [maxDuration, setMaxDuration] = useState(undefined);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    setMaxDuration("06:00");
  }, []);

  useEffect(() => {
    if (maxDuration) {
      const durationMaxMax = maxDuration
        .split(":")
        .reduce((acc, time) => 60 * acc + +time);
      const duration = Math.floor((durationMaxMax * durationPercentage) / 100);

      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;

      const output = `${String(minutes).padStart(2, 0)}:${String(
        seconds
      ).padStart(2, 0)}`;

      setNowDuration(output);
    }
  }, [maxDuration, durationPercentage]);

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
            <div className="bottomPlayer-cont-1-1_iconsSec bottomPlayer-cont-1-1_sections">
              <Heart className="bottomPlayer-cont-1-1_iconsSec_icon" />
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

            <div className="bottomPlayer-cont-1-2_controlSec">
              <p>{nowDuration ? nowDuration : "00:00"}</p>
              <Slider
                className="bottomPlayer-cont-1_slider"
                onChange={(event, newDurationPercentage) =>
                  setDurationPercentage(newDurationPercentage)
                }
              />
              <p>{maxDuration ? maxDuration : "00:00"}</p>
            </div>
          </div>

          <div className="bottomPlayer-cont-1_toolsSec bottomPlayer-cont-1_sections">
            <div className="bottomPlayer-cont-1-3_slider">
              {volume < 1 && (
                <SpeakerMute className="bottomPlayer-cont-1-3-1__icon" />
              )}
              {volume > 1 && volume < 50 && (
                <Speaker1 className="bottomPlayer-cont-1-3-1__icon" />
              )}
              {volume > 49 && (
                <Speaker2 className="bottomPlayer-cont-1-3-1__icon" />
              )}
              <Slider
                className="bottomPlayer-cont-1_slider bottomPlayer-cont-1-3-1__slider"
                value={volume}
                onChange={(event, newVolume) => setVolume(newVolume)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPlayer;
