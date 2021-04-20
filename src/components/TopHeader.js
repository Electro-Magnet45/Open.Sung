import React, { useState } from "react";
import "./TopHeader.css";

import { ClickAwayListener } from "@material-ui/core";
import { IosArrowLeft, ArrowUp } from "@styled-icons/fluentui-system-filled";
import { Person } from "@styled-icons/fluentui-system-regular";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TopHeader = () => {
  const history = useHistory();

  const [openAccountBar, setOpenAccountBar] = useState(false);
  const historyPaths = useSelector((state) => state.history.paths);

  const handleClickAway = () => {
    if (openAccountBar) {
      setOpenAccountBar((prev) => !prev);
    }
  };

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
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="topHeader-cont-2_container">
              <div
                className="topHeader-cont-2-1_mainDiv"
                onClick={() => setOpenAccountBar(true)}
              >
                <Person className="topHeader-cont-2-1_icon" />
                <p>{"UserNameWithUserName".substr(0, 17)}...</p>
              </div>

              <div
                className={
                  "topHeader-cont-2-1_overlayDiv " +
                  (openAccountBar ? "topHeader-cont-2-1-over_visible" : "")
                }
              >
                <div className="topHeader-cont-2-1-2_container">
                  <div className="topHeader-cont-2-1-2-1_item">
                    Account <ArrowUp />
                  </div>
                  <div className="topHeader-cont-2-1-2-1_item">
                    Profile <ArrowUp />
                  </div>
                  <div className="topHeader-cont-2-1-2-1_item">Log Out</div>
                </div>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
