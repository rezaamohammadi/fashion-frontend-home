import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/MenuSlice"; // Adjust the path as necessary

const Store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default Store;
