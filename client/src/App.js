import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
const App = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
