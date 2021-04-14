import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import TopHeader from "./components/TopHeader";
import SideBar from "./components/SideBar";
import BottomPlayer from "./components/BottomPlayer";
import Home from "./screens/Home";
import Search from "./screens/Search";
import ErrorPage from "./screens/ErrorPage";

import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { increment } from "./redux/historySlice";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showBars, setShowBars] = useState(true);

  useEffect(() => {
    history.listen((location) => {
      dispatch(
        increment([
          {
            path: location.pathname,
          },
        ])
      );
    });
  }, [dispatch]);

  return (
    <div className="app">
      {showBars && <TopHeader />}
      {showBars && <SideBar />}
      {showBars && <BottomPlayer />}

      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <div className="app_container">
              <Home />
            </div>
          </Route>

          <Route path="/search">
            <div className="app_container">
              <Search />
            </div>
          </Route>

          <Route>
            <ErrorPage setShowBars={setShowBars} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
