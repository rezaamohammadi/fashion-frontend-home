import { configureStore } from "@reduxjs/toolkit";
import DataManagerSlice, { wholeMenu } from "./slices/DataManagerSlice";
import menuSlice, { setMenu } from "./slices/MenuSlice";
import { wholeProducts } from "./slices/DataManagerSlice";
import ProductSlice, {  setProducts } from "./slices/ProductSlice";
const store = configureStore({
  reducer: {
    manager: DataManagerSlice,
    menuhead: menuSlice,
    products: ProductSlice,
  
  },
});

export const initializeManager = () => {
  const menus = wholeMenu(store.getState());
  store.dispatch(setMenu(menus));
  
  const products = wholeProducts(store.getState()); 
  store.dispatch(setProducts(products));
  console.log("Loaded manager from state:", products, menus);
};

export default store;
