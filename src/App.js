import React, { useState } from "react";
import "./App.css";

import SideBar from "./components/SideBar";
import BottomPlayer from "./components/BottomPlayer";
import Home from "./screens/Home";
import ErrorPage from "./screens/ErrorPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [showBars, setShowBars] = useState(true);

  return (
    <div className="app">
      <Router>
        {showBars && <SideBar />}
        {showBars && <BottomPlayer />}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route>
            <ErrorPage setShowBars={setShowBars} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
