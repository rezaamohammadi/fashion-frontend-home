import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/style.css";import "../src/assets/fontawsome/css/all.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import router from "./routes";
import { configureStore } from "@reduxjs/toolkit";
import DataManagerSlice, { setMenus, wholeMenu } from "../src/store/slices/DataManagerSlice";
import menuSlice, { setMenu } from "../src/store/slices/MenuSlice";
import { useSelector } from "react-redux";

import store, { initializeMenus } from "./store/Store";


initializeMenus();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();