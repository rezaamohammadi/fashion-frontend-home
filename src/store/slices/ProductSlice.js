import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    productss: [],
    filtered: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.productss = action.payload;
      state.filtered = action.payload;
    },
    filter: (state, action) => {
      // console.log(state.products);
      //  let nstd= state.productss.filter((pro) => pro.categories === action.payload);
      // return{...state,productss:nstd}
    },
  },
});
export const { setProducts } = productSlice.actions;
export const { filter } = productSlice.actions;
export const productsss = (state) => state.products.productss;
export default productSlice.reducer;
