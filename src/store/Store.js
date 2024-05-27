import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/MenuSlice";

export const Store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
export default Store;
