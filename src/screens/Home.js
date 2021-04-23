import React from "react";
import "./css/Home.css";
import GridBox from "../components/GridBox";
import { motion } from "framer-motion";

const Home = () => {
  const imageSrc =
    "https://live.staticflickr.com/8144/7551183592_a0c6d2ffe0_b.jpg";
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
              <GridBox
                pfImage={imageSrc}
                title={"This is title"}
                author={"Author 1"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a long title"}
                author={"Author 2"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a very long title"}
                author={"Author 3"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a very very long title"}
                author={"Author 4"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a long title"}
                author={"Author 2"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a very long title"}
                author={"Author 3"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a very very long title"}
                author={"Author 4"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a long title"}
                author={"Author 2"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a very long title"}
                author={"Author 3"}
              />
              <GridBox
                pfImage={imageSrc}
                title={"This is a very very long title"}
                author={"Author 4"}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
