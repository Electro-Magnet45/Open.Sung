import React, { useState, useEffect } from "react";
import "./TopHeader.css";

import { IosArrowLeft } from "@styled-icons/fluentui-system-filled";
import { Person } from "@styled-icons/fluentui-system-regular";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TopHeader = () => {
  const history = useHistory();

  const [openAccountBar, setOpenAccountBar] = useState(false);
  const historyPaths = useSelector((state) => state.history.paths);

  useEffect(() => {
    if (openAccountBar) {
      window.addEventListener("click", (e) => {
        if (!e.target.className.includes("topHeader-cont-2-1-over_visible")) {
          setOpenAccountBar(false);
        }
      });
    }
  }, [openAccountBar]);

  return (
    <div className="topHeader">
      <div className="topHeader__container">
        <div className="topHeader-cont_simpleNavSec">
          <IosArrowLeft
            className={
              "topHeader-cont_icons " +
              (historyPaths[0] ? "topHeader-cont-1_enabled" : "")
            }
            onClick={() => history.goBack()}
          />
          <IosArrowLeft
            className={
              "topHeader-cont_icons topHeader-conticons_left " +
              (historyPaths[1] ? "topHeader-cont-1_enabled" : "")
            }
            onClick={() => history.goForward()}
          />
        </div>
        <div className="topHeader-cont_accountSec">
          <div className="topHeader-cont-2_container">
            <div
              className="topHeader-cont-2-1_mainDiv"
              onClick={() => setOpenAccountBar(true)}
            >
              <Person className="topHeader-cont-2-1_icon" />
              <p>{"User Name"}</p>
            </div>

            <div
              className={
                "topHeader-cont-2-1_overlayDiv " +
                (openAccountBar ? "topHeader-cont-2-1-over_visible" : "")
              }
            >
              hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
