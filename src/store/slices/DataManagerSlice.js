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
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64b33842708a4f368668b79bcdf368af_9366/Neuclassics_T-Shirt_Schwarz_IW5603_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/84d6f2916e744c798f5ffa245c9f3d8a_9366/Adicolor_Classics_Loose_Firebird_Track_Top_Black_IT7405_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cabfec36c86a4d1484e02ff63a9508f3_9366/Trefoil_Regular_Tee_White_IR9534_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64b33842708a4f368668b79bcdf368af_9366/Neuclassics_T-Shirt_Schwarz_IW5603_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/84d6f2916e744c798f5ffa245c9f3d8a_9366/Adicolor_Classics_Loose_Firebird_Track_Top_Black_IT7405_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cabfec36c86a4d1484e02ff63a9508f3_9366/Trefoil_Regular_Tee_White_IR9534_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64b33842708a4f368668b79bcdf368af_9366/Neuclassics_T-Shirt_Schwarz_IW5603_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/84d6f2916e744c798f5ffa245c9f3d8a_9366/Adicolor_Classics_Loose_Firebird_Track_Top_Black_IT7405_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cabfec36c86a4d1484e02ff63a9508f3_9366/Trefoil_Regular_Tee_White_IR9534_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64b33842708a4f368668b79bcdf368af_9366/Neuclassics_T-Shirt_Schwarz_IW5603_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/84d6f2916e744c798f5ffa245c9f3d8a_9366/Adicolor_Classics_Loose_Firebird_Track_Top_Black_IT7405_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
          },
          {
            image:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cabfec36c86a4d1484e02ff63a9508f3_9366/Trefoil_Regular_Tee_White_IR9534_21_model.jpg",
            title: "تیشرت زنانه",
            price: 900,
            rate: 2,
            category: "اسپرت زنانه",
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
