
import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
  name: "products",
  initialState: {
    productss: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.productss = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const productsss = (state) => state.products.productss;
export default productSlice.reducer;
