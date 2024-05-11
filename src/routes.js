import {  createBrowserRouter } from "react-router-dom";
import WomenSet, { loader as womensetLoader } from "./pages/front/WomenSet";
import SingleProduct, {
  loader as singleproductLoader,
} from "./pages/front/SingleProduct";
import App from "./App";
import SellSet, { loader as sellsetLoader } from "./pages/front/SellSet";
import HomePage, { loader as homepageLoader } from "./pages/front/HomePage";
import KidBoy, { loader as kidboyLoader } from "./pages/front/KidBoy";
import KidGirl, { loader as kidgirlLoader } from "./pages/front/KidGirl";
import KidBaby, { loader as kidbabyLoader } from "./pages/front/KidBaby";
import SignVerify, { loader as signverifyLoader } from "./pages/authentication/SignVerify";
import SetPassword, {
  loader as setpasswordLoader,
} from "./pages/authentication/SetPassword";
import NumberExist, {
  loader as numberexistLoader,
} from "./pages/authentication/NumberExist";
import SearchResault, {
  loader as searchresaultLoader,
} from "./pages/front/SearchResault";
import Category, { loader as categoryLoader } from "./pages/front/Category";
import CompletePurchase, {
  loader as completepurchaseLoader,
} from "./pages/front/CompletePurchase";
import EmailExist, { loader as emailexistLoader } from "./pages/authentication/EmailExist";
import SetInformation, {
  loader as setinformationLoader,
} from "./pages/authentication/SetInformation";
import ForgetVerify, {
  loader as forgetverifyLoader,
} from "./pages/authentication/ForgetVerify";
import EmailNumber, {
  loader as emailnumberLoader,
} from "./pages/authentication/EmailNumber";
import ForgetPassword, {
  loader as forgetpasswordLoader,
} from "./pages/authentication/ForgetPassword";
import ChangePassword, {
  loader as changepasswordLoader,
} from "./pages/authentication/ChangePassword";

import AboutUs, { loader as aboutusLoader } from "./pages/front/AboutUs";
import CallUs, { loader as callusLoader } from "./pages/front/CallUs";
import ChooseCompare, {
  loader as choosecompareLoader,
} from "./pages/front/ChooseCompare";
import Guide, { loader as guideLoader } from "./pages/front/Guide";
import AllProduct, { loader as AllproductLoader } from "./pages/front/AllProduct";
import CartPage, { loader as cartpageLoader } from "./pages/front/CartPage";
import FrequentlyQuestion, {
  loader as frequentlyquestionLoader,
} from "./pages/front/FrequentlyQuestion";
import FrequentlyAnswer, {
  loader as frequentlyanswerLoader,
} from "./pages/front/FrequentlyAnswer";
import CompareProducts, {
  loader as compareproductsLoader,
} from "./pages/front/CompareProducts";
import Profile, { loader as profileLoader } from "./pages/profile/Profile";
import ProfileInformation, {
  loader as profileinformationLoader
} from "./pages/profile/content/ProfileInformation";

import OrderHistory, { loader as orderhistoryLoader } from "./pages/profile/content/OrderHistory";
import Opinions, { loader as opnionsLoader } from "./pages/profile/content/Opnions";
import Addresses, { loader as addressesLoader } from "./pages/profile/content/Addresses";
import CodeOff, { loader as codeoffLoader } from "./pages/profile/content/CodeOff";
import Favourite,{loader as favouriteLoader} from "./pages/profile/content/Favourite";
import Massages,{loader as massagesLoader} from "./pages/profile/content/Massages";
import OrderHistoryClick,{loader as orderhistoryclickLoader} from "./pages/profile/content/OrderHistoryClick";
import OrderHistoryCancell,{loader as orderhistorycancellLoader} from "./pages/profile/content/OrderHistoryCancell";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "women-set",
          element: <WomenSet />,
          loader: womensetLoader,
        },
        {
          path: "single-product",
          element: <SingleProduct />,
          loader: singleproductLoader,
        },
        {
          path: "sell-Set",
          element: <SellSet />,
          loader: sellsetLoader,
        },
        {
          path: "home-page",
          element: <HomePage />,
          loader: homepageLoader,
        },
        {
          path: "kid-boy",
          element: <KidBoy />,
          loader: kidboyLoader,
        },
        {
          path: "kid-girl",
          element: <KidGirl />,
          loader: kidgirlLoader,
        },
        {
          path: "kid-baby",
          element: <KidBaby />,
          loader: kidbabyLoader,
        },
        {
          path: "sign-verify",
          element: <SignVerify />,
          loader: signverifyLoader,
        },
        {
          path: "set-password",
          element: <SetPassword />,
          loader: setpasswordLoader,
        },
        {
          path: "number-exist",
          element: <NumberExist />,
          loader: numberexistLoader,
        },
        {
          path: "search-resault",
          element: <SearchResault />,
          loader: searchresaultLoader,
        },
        {
          path: "category",
          element: <Category />,
          loader: categoryLoader,
        },
        {
          path: "complete-purchase",
          element: <CompletePurchase />,
          loader: completepurchaseLoader,
        },
        {
          path: "email-exist",
          element: <EmailExist />,
          loader: emailexistLoader,
        },
        {
          path: "set-information",
          element: <SetInformation />,
          loader: setinformationLoader,
        },
        {
          path: "forget-verify",
          element: <ForgetVerify />,
          loader: forgetverifyLoader,
        },
        {
          path: "email-number",
          element: <EmailNumber />,
          loader: emailnumberLoader,
        },
        {
          path: "forget-password",
          element: <ForgetPassword />,
          loader: forgetpasswordLoader,
        },
        {
          path: "change-password",
          element: <ChangePassword />,
          loader: changepasswordLoader,
        },
      
        {
          path: "about-us",
          element: <AboutUs />,
          loader: aboutusLoader,
        },
        {
          path: "call-us",
          element: <CallUs />,
          loader: callusLoader,
        },
        {
          path: "choose-compare",
          element: <ChooseCompare />,
          loader: choosecompareLoader,
        },
        {
          path: "guide",
          element: <Guide />,
          loader: guideLoader,
        },
        {
          path: "all-product",
          element: <AllProduct />,
          loader: AllproductLoader,
        },
        {
          path: "cart-page",
          element: <CartPage />,
          loader: cartpageLoader,
        },
        {
          path: "frequently-question",
          element: <FrequentlyQuestion />,
          loader: frequentlyquestionLoader,
        },
        {
          path: "frequently-answer",
          element: <FrequentlyAnswer />,
          loader: frequentlyanswerLoader,
        },
        {
          path: "compare-product",
          element: <CompareProducts />,
          loader: compareproductsLoader,
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "profile-information",
              element: <ProfileInformation />,
              loader: profileinformationLoader,
            },
          
       
            {
              path: "order-history",
              element: <OrderHistory />,
              loader: orderhistoryLoader,
            },
            {
              path: "opnions",
              element: <Opinions />,
              loader: opnionsLoader,
            },
            {
              path: "addresses",
              element: <Addresses />,
              loader: addressesLoader,
            },
            {
              path: "code-off",
              element: <CodeOff />,
              loader: codeoffLoader,
            },
            {
              path: "favourite",
              element: <Favourite />,
              loader: favouriteLoader,
            },
            {
              path: "massages",
              element: <Massages />,
              loader: massagesLoader,
            },
            {
              path: "order-history-click",
              element: <OrderHistoryClick />,
              loader: orderhistoryclickLoader,
            },
            {
              path: "order-history-cancell",
              element: <OrderHistoryCancell />,
              loader: orderhistorycancellLoader,
            },
          ]
        },
  
      ],
    },
  ]);
  export default router