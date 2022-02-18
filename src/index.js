import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DisplayProvider } from "./components/DisplayContext";
import { FilterProvider } from "./components/FilterContext";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FilterProvider>
        <DisplayProvider>
          <App />
        </DisplayProvider>
      </FilterProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

