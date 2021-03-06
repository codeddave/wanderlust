import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store, persistor } from "./components/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { IconContext } from "react-icons";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <IconContext.Provider
        value={{ size: "1.4rem", className: "react-icons" }}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router>
              <App />
            </Router>
          </PersistGate>
        </Provider>
      </IconContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
