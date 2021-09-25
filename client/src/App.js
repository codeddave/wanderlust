import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import decode from "jwt-decode";
import { signOut } from "./components/redux/auth/userActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Profile from "./components/Profile/Profile";
import "./App.css";
const App = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const location = useLocation();
  const token = user?.token;
  useEffect(() => {
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(signOut());
      }
    }
  }, [location, dispatch, token]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
