import React, { useEffect, useState } from "react";
import "./SideBar.css";

import { Home as OutLinedHome } from "@styled-icons/fluentui-system-regular";
import { Home as FilledHome } from "@styled-icons/fluentui-system-filled";
import { Search as OutLinedSearch } from "@styled-icons/boxicons-regular";
import { SearchAlt2 as FilledSearch } from "@styled-icons/boxicons-solid";
import { Library as OutLinedLibrary } from "@styled-icons/fluentui-system-regular";
import { Library as FilledLibrary } from "@styled-icons/fluentui-system-filled";

import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const [homeHover, setHomeHover] = useState(false);
  const [couldEditHome, setCouldEditHome] = useState(true);
  const [searchHover, setSearchHover] = useState(false);
  const [couldEditSearch, setCouldEditSearch] = useState(true);
  const [libraryHover, setLibraryHover] = useState(false);
  const [couldEditLibrary, setCouldEditLibrary] = useState(true);

  const mouseHoverHome = (state) => {
    if (couldEditHome) {
      setHomeHover(state);
    }
  };

  const mouseHoverSearch = (state) => {
    if (couldEditSearch) {
      setSearchHover(state);
    }
  };

  const mouseHoverLibrary = (state) => {
    if (couldEditLibrary) {
      setLibraryHover(state);
    }
  };

  useEffect(() => {
    if (location.pathname.substr(1) === "home") {
      setCouldEditHome(false);
      setCouldEditSearch(true);
      setCouldEditLibrary(true);
      setHomeHover(true);
      var elems = document.querySelectorAll(".fixed-selected");

      [].forEach.call(elems, function (el) {
        el.classList.remove("fixed-selected", "selected");
      });

      document
        .querySelector(".sideBar-cont-1-1-3_home")
        .classList.add("fixed-selected", "selected");
    }

    if (location.pathname.substr(1) === "search") {
      setCouldEditSearch(false);
      setCouldEditHome(true);
      setCouldEditLibrary(true);
      setSearchHover(true);

      var elems2 = document.querySelectorAll(".fixed-selected");

      [].forEach.call(elems2, function (el) {
        el.classList.remove("fixed-selected", "selected");
      });

      document
        .querySelector(".sideBar-cont-1-1-3_search")
        .classList.add("fixed-selected");
      document
        .querySelector(".sideBar-cont-1-1-3_search")
        .classList.add("selected");
    }

    if (location.pathname.substr(1) === "library") {
      setCouldEditLibrary(false);
      setCouldEditHome(true);
      setCouldEditSearch(true);
      setLibraryHover(true);

      var elems3 = document.querySelectorAll(".fixed-selected");

      [].forEach.call(elems3, function (el) {
        el.classList.remove("fixed-selected", "selected");
      });

      document
        .querySelector(".sideBar-cont-1-1-3_library")
        .classList.add("fixed-selected");
      document
        .querySelector(".sideBar-cont-1-1-3_library")
        .classList.add("selected");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (homeHover) {
      document
        .querySelector(".sideBar-cont-1-1-3_home")
        .classList.add("selected");
    } else {
      if (
        document
          .querySelector(".sideBar-cont-1-1-3_home")
          .classList.contains("selected")
      ) {
        document
          .querySelector(".sideBar-cont-1-1-3_home")
          .classList.remove("selected");
      }
    }
  }, [homeHover]);

  useEffect(() => {
    if (searchHover) {
      document
        .querySelector(".sideBar-cont-1-1-3_search")
        .classList.add("selected");
    } else {
      if (
        document
          .querySelector(".sideBar-cont-1-1-3_search")
          .classList.contains("selected")
      ) {
        document
          .querySelector(".sideBar-cont-1-1-3_search")
          .classList.remove("selected");
      }
    }
  }, [searchHover]);

  useEffect(() => {
    if (libraryHover) {
      document
        .querySelector(".sideBar-cont-1-1-3_library")
        .classList.add("selected");
    } else {
      if (
        document
          .querySelector(".sideBar-cont-1-1-3_library")
          .classList.contains("selected")
      ) {
        document
          .querySelector(".sideBar-cont-1-1-3_library")
          .classList.remove("selected");
      }
    }
  }, [libraryHover]);

  return (
    <div className="sideBar">
      <div className="sideBar__container">
        <div className="sideBar__div">
          <div className="sideBar-cont-1_container">
            <div className="sideBar-cont-1-1_titleSec">
              <h2>Sung</h2>
            </div>

            <div className="sideBar-cont-1-1_navSec">
              <Link to="/home">
                <div
                  className="sideBar-cont-1-1-3_home"
                  onMouseEnter={() => mouseHoverHome(true)}
                  onMouseLeave={() => mouseHoverHome(false)}
                >
                  {homeHover ? (
                    <FilledHome className="sideBar-cont-1-1-3_icons" />
                  ) : (
                    <OutLinedHome className="sideBar-cont-1-1-3_icons" />
                  )}{" "}
                  Home
                </div>
              </Link>

              <Link to="/search">
                <div
                  className="sideBar-cont-1-1-3_search"
                  onMouseEnter={() => mouseHoverSearch(true)}
                  onMouseLeave={() => mouseHoverSearch(false)}
                >
                  {searchHover ? (
                    <FilledSearch className="sideBar-cont-1-1-3_icons" />
                  ) : (
                    <OutLinedSearch className="sideBar-cont-1-1-3_icons" />
                  )}{" "}
                  Search
                </div>
              </Link>

              <Link to="/library">
                <div
                  className="sideBar-cont-1-1-3_library"
                  onMouseEnter={() => mouseHoverLibrary(true)}
                  onMouseLeave={() => mouseHoverLibrary(false)}
                >
                  {libraryHover ? (
                    <FilledLibrary className="sideBar-cont-1-1-3_icons" />
                  ) : (
                    <OutLinedLibrary className="sideBar-cont-1-1-3_icons" />
                  )}{" "}
                  Library
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
