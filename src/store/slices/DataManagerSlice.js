import { createSlice } from "@reduxjs/toolkit";

const loadData = () => {
  const savedMenus = localStorage.getItem("menus");
  const savedProducts = localStorage.getItem("products");
  return {
    menus: savedMenus
      ? JSON.parse(savedMenus)
      : [
          { id: 1001, name: "صفحه اصلی", path: "/home-page" },
          { id: 1002, name: "دسته بندی", path: "/category" },
          { id: 1003, name: "پرو آنلاین", path: "#" },
          { id: 1004, name: "درباره ما", path: "/about-us" },
          { id: 1005, name: "تماس با ما", path: "/call-us" },
          { id: 1006, name: "راهنمای استفاده", path: "/guide" },
        ],
    products: savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3257a613d5244e6902bf38085d37a27_9366/Tiro_Cut_3-Stripes_Crop_Jersey_Green_IZ2081_21_model.jpg",
            title: " تیشرت زنانه",
            price: 500,
            rate: 4,
            categories: ["زنانه"],
            properties: {
              color: "سبز",
              size: "m",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/14dc7766a0224edca915f394afd1f237_9366/Adicolor_Satin_Wide_Leg_Track_Pants_Black_IU2520_21_model.jpg",
            title: " شلوار زنانه",
            price: 400,
            rate: 2,
            categories: ["زنانه"],
            properties: {
              color: "مشکی",
              size: "l",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97741b87a0bb4d2688418754fcf7e6eb_9366/Trefoil_Essentials_Tee_Blue_IZ2097_21_model.jpg",
            title: " تیشرت مردانه",
            price: 300,
            rate: 3,
            categories: ["مردانه"],
            properties: {
              color: "سرمه ای",
              size: "xl",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7d0aa56d8dc41a2afd14c175ccad8bf_9366/Designed_for_Training_Workout_Tee_Grey_IS3809_21_model.jpg",
            title: " تیشرت مردانه",
            price: 450,
            rate: 4,
            categories: ["مردانه"],
            properties: {
              color: "طوسی",
              size: "xl",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e2330020ac540eaa6fad3c3e9177cfe_9366/Adibreak_Pants_Red_IY9924_21_model.jpg",
            title: " شلوار مردانه",
            price: 700,
            rate: 1,
            categories: ["مردانه"],
            properties: {
              color: "قرمز",
              size: "l",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0caf697b1d554f998f0b38f37af6e907_9366/Trefoil_Essentials_Hoodie_Blue_IY4929_21_model.jpg",
            title: " هودی مردانه",
            price: 500,
            rate: 4,
            categories: ["مردانه"],
            properties: {
              color: "سرمه ای",
              size: "2xl ",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/35697fe6d4d74f839c6ae62bfd81b673_9366/AOP_PEBBLE_CAMO_SS_TEE_Green_IR4934_21_model.jpg",
            title: " تیشرت بچگانه",
            price: 300,
            rate: 3,
            categories: ["بچگانه"],
            properties: {
              color: "سبز",
              size: "s",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bacd95b14d794f00ba51c4f4e404b581_9366/adidas_Designed_for_Training_Stretch_Woven_Pants_Green_IR4853_21_model.jpg",
            title: " شلوار بچگانه",
            price: 300,
            rate: 4,
            categories: ["بچگانه"],
            properties: {
              color: "سبز",
              size: "m",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/118d5b041aef4553afba9020eca07117_9366/ALL_SZN_Fleece_Loose_Hoodie_Pink_IY6765_21_model.jpg",
            title: " هودی زنانه",
            price: 500,
            rate: 4,
            categories: ["زنانه"],
            properties: {
              color: "صورتی",
              size: "l",
            },
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c0353795b00549caba60111796b52d1a_9366/Trefoil_Essentials_Tee_White_IZ2098_21_model.jpg",
            title: " تیشرت مردانه",
            price: 800,
            rate: 4,
            categories: ["مردانه"],
            properties: {
              color: "سفید",
              size: "xl",
            },
          },
        ],
  };
};

export const DataManagerSlice = createSlice({
  name: "manager",
  initialState: {
    menus: loadData(),
    products: loadData(),
  },

  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
      localStorage.setItem("menus", JSON.stringify(action.payload));
    },
    setproducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
  },
});

export const { setMenus } = DataManagerSlice.actions;
export const wholeMenu = (state) => state.manager.menus;
export const { setproducts } = DataManagerSlice.actions;
export const wholeProducts = (state) => state.manager.products;
export default DataManagerSlice.reducer;
