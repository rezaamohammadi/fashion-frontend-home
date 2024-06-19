
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
