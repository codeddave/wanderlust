import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import decode from "jwt-decode";
import { signOut } from "./components/redux/auth/userActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(signOut());
      }
    }
  }, []);
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
