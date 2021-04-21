import React from "react";
import "./css/Home.css";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home">
        <div className="home_container">
          <div className="home-cont_titleSec">
            <h1>Recent</h1>
          </div>

          <div className="home-cont_recentSec">
            <div className="home-cont-2_div">
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
              <div className="gridBox">
                <div className="gridBox_container">
                  <h5>sfsdf</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
