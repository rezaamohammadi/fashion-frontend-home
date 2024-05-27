import { createSlice } from "@reduxjs/toolkit";
export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [
      { id: 1001, name: "صفحه اصلی", path: "/home-page" },
      { id: 1002, name: "دسته بندی", path: "/category" },
      { id: 1003, name: "پرو آنلاین", path: "#" },
      { id: 1004, name: "درباره ما", path: "/about-us" },
      { id: 1005, name: "تماس با ما ", path: "/call-us" },
      { id: 1006, name: "راهنمای استفاده ", path: "/guide" },
    ],
  },
  reducers: {},
});
export const menus = (state) => state.menu.menus;
export default menuSlice.reducer;
