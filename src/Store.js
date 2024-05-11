import { createStore } from "redux";

import React, { useReducer } from "react";

import { Navigate } from "react-router-dom";
export function loader(data) {
  return data.params;
}

const initialState = {};
const reducer = (state = initialState, action) => {
  return state;
};
const Store = createStore(reducer);
export default Store;
