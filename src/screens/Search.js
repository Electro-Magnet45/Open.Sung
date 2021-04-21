import React from "react";
import "./css/Search.css";

import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="search"></div>
    </motion.div>
  );
};

export default Search;
