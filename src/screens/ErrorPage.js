import React from "react";
import "./css/ErrorPage.css";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="errorPage__container">
        <h2>
          <Link to="/home">Sung</Link>
        </h2>
        <p>This page was not found!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
