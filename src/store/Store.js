import { configureStore } from "@reduxjs/toolkit";
import DataManagerSlice, { wholeMenu } from "./slices/DataManagerSlice";
import menuSlice, { setMenu } from "./slices/MenuSlice";

const store = configureStore({
  reducer: {
    manager: DataManagerSlice,
    menuhead: menuSlice,
  },
});

// Initialize the store with menu data
export const initializeMenus = () => {
  const menus = wholeMenu(store.getState());
  console.log("Loaded menus from state:", menus);
  store.dispatch(setMenu(menus));
};

export default store;
