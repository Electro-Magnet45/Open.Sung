import React from "react";
import "./TopHeader.css";

import { IosArrowLeft } from "@styled-icons/fluentui-system-filled";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TopHeader = () => {
  const history = useHistory();

  const historyPaths = useSelector((state) => state.history.paths);

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
        <div className="topHeader-cont_searchSec"></div>
      </div>
    </div>
  );
};

export default TopHeader;
