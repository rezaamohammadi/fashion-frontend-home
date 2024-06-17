// import { createSlice } from "@reduxjs/toolkit";

// export const DataManagerSlice = createSlice({
//   name: "manager",
//   initialState: {
//     menus: [
//       { id: 1001, name: "صفحه اصلی", path: "/home-page" },
//       { id: 1002, name: "دسته بندی", path: "/category" },
//       { id: 1003, name: "پرو آنلاین", path: "#" },
//       { id: 1004, name: "درباره ما", path: "/about-us" },
//       { id: 1005, name: "تماس با ما", path: "/call-us" },
//       { id: 1006, name: "راهنمای استفاده", path: "/guide" },
//     ],
//   },
//   reducers: {},
// });

// export const wholeMenu = (state) => state.manager.menus;


// export default DataManagerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const loadData = () => {
  const savedMenus = localStorage.getItem("menus");
  return savedMenus ? JSON.parse(savedMenus) : [
    { id: 1001, name: "صفحه اصلی", path: "/home-page" },
    { id: 1002, name: "دسته بندی", path: "/category" },
    { id: 1003, name: "پرو آنلاین", path: "#" },
    { id: 1004, name: "درباره ما", path: "/about-us" },
    { id: 1005, name: "تماس با ما", path: "/call-us" },
    { id: 1006, name: "راهنمای استفاده", path: "/guide" },
  ];
};

export const DataManagerSlice = createSlice({
  name: "manager",
  initialState: {
    menus: loadData(),
  },
  
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
      localStorage.setItem("menus", JSON.stringify(action.payload));
    },
  },
});

export const { setMenus } = DataManagerSlice.actions;
export const wholeMenu = (state) => state.manager.menus;
export default DataManagerSlice.reducer;