// import { createSlice } from "@reduxjs/toolkit";
// import { wholeMenu } from "../slices/DataManagerSlice";
// import { useDispatch, useSelector } from "react-redux";

// export const menuSlice = createSlice({
//   name: "menuhead",
//   initialState: {
//      themenu : useSelector(wholeMenu)

//   },
//   reducers: {},
// });

// // Selector
// export const selectMenus = (state) => state.menuhead.themenu;

// // Reducer
// export default menuSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menuhead",
  initialState: {
    themenu: [],
  },
  reducers: {
    setMenu: (state, action) => {
      state.themenu = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export const selectMenus = (state) => state.menuhead.themenu;
export default menuSlice.reducer;
