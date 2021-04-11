import React from "react";
import "./App.css";

import SideBar from "./components/SideBar";
import Home from "./screens/Home";
import ErrorPage from "./screens/ErrorPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <SideBar />
            <Home />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
