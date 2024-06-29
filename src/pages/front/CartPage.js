import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { InputNumber } from 'rsuite';
import { InputNumber, InputGroup, Stack } from 'rsuite';
import { useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import SingelCard from "../../components/cards/SingelCard";
import ProgressBar from "@badrap/bar-of-progress";
import { productsss } from "../../store/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const progress = new ProgressBar({
    size: 2,
    color: "#29e",
    className: "bar-of-progress",
    delay: 80,

});

export function loader() {
    progress.start();
    setTimeout(() => {
        progress.finish();
    }, 1000)
    return true
}

export default function CartPage() {
  const [value, setValue] = useState(0);
  const handleMinus = () => {
    setValue(parseInt(value, 10) - 1);
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };
  const productss = useSelector(productsss);

  return (
    <>
      <div id="cart-main">
        <div id="cart-products">
          <SingelCard image={process.env.PUBLIC_URL + "/assets/img/Rectangle84.jpg"}/>
          <SingelCard image={process.env.PUBLIC_URL + "/assets/img/55a6c2cc48275acdbcf86a9ad2a9be2f.jpg"}/>
          <SingelCard image={process.env.PUBLIC_URL + "/assets/img/d1725dcdc1938cf0af596beaf20ad453.jpg"}/>
        </div>
        <div id="cart-order">
          <div className="order-detail">
            <div className="send-type">
              <p>نحوه ارسال</p>
              <select>
                <option>پست پیشتاز</option>
                <option>پیشتاز</option>
              </select>
            </div>
            <div className="send-time">
              <p>زمان ارسال</p>
              <i className="fa-regular fa-calendar-days fa-xl"></i>
            </div>
            <span>آدرس تحویل سفارش</span>
            <div className="send-loc">
              <i className="fa-solid fa-location-dot"></i>
              <p>ناکجاآباد - خیابان پرت - کوچه علی چپ</p>
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
          <div className="order-price">
            <div className="total-pr">
              <p>قیمت کالاها (6)</p>
              <h4>600,000 تومان</h4>
            </div>
            <div className="off-pr">
              <input type="text" placeholder="کد تخفیف" />
              <button>اعمال</button>
            </div>
            <div className="red-pr">
              <p>مقدار تخفیف</p>
              <h4>20,000 تومان</h4>
            </div>
            <div className="final-pr">
              <p>جمع مبلغ پرداختی</p>
              <h4>580,000 تومان</h4>
            </div>
            <Link to={"/complete-purchase"} >ثبت سفارش</Link>
          </div>
        </div>
      </div>

      <div id="pro-carousel">
        <div className="head">
          <h2>جدید ترین ست های زنانه</h2>
          <Link to={"/all-product"}   >مشاهده همه</Link>
        </div>
        <div className="products-section">
          <Swiper spaceBetween={30}
            slidesPerView={4.4}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              868: {
                slidesPerView: 3,
              },
              1192: {
                slidesPerView: 4.4,
              },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <div className="swiper-wrapper">
            {productss.products.map((pro) => (
                <SwiperSlide>
                  <ProductCard
                    image={pro.image}
                    title={pro.title}
                   category={pro.categories.map((cat)=>(
                      cat
                    ))}
                    price={pro.price}
                    rate={pro.rate}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}