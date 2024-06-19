import { configureStore } from "@reduxjs/toolkit";
import DataManagerSlice, {  wholeMenu } from "./slices/DataManagerSlice";
import menuSlice, { setMenu } from "./slices/MenuSlice";

import { wholeProducts } from "./slices/DataManagerSlice";
import ProductSlice, { setProducts } from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    manager: DataManagerSlice,
    menuhead: menuSlice,
    products:ProductSlice
  },
});


export const initializeMenus = () => {
  const menus = wholeMenu(store.getState());
  console.log("Loaded menus from state:", menus);
  store.dispatch(setMenu(menus));
};
export const initializeProducts = () => {
  const products = wholeProducts(store.getState());
  console.log("Loaded products from state:", products);
  store.dispatch(setProducts(products));
};

export default store;
