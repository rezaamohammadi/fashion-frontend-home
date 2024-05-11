import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { InputNumber } from 'rsuite';
import { InputNumber, InputGroup, Stack } from 'rsuite';
import { useState } from "react";

export function loader(data) {
  return 0;
}
export default function CartPage() {
  const [value, setValue] = useState(0);
  const handleMinus = () => {
    setValue(parseInt(value, 10) - 1);
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };
  
  return (
    <>
      <div id="cart-main">
        <div id="cart-products">
          <div className="cart-pro">
            <div className="right-sec">
              <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle84.jpg"} />
              <div className="count">
                <InputGroup className="count-sec">
                  <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                  <InputNumber className={'custom-input-number'} value={value} onChange={setValue} />
                  <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                </InputGroup>
              </div>
            </div>
            <div className="left-sec">
              <Link className="link-ti" to={"/single-product"}>
                <div className="titel-pro">
                  <h2>شلوار جین زنانه مدل مام فیت</h2>
                  <i class="fa-solid fa-trash-can fa-xl"></i>
                </div>
              </Link>
              <div className="color-pro">
                <div className="col-itself"></div>
                <p>رنگ: آبی</p>
              </div>
              <div className="size-pro">
                <i className="fa-solid fa-arrows-up-down fa-xl "></i>
                <p>سایز: 2XL</p>
              </div>
              <div className="price-pro">
                <h5>450,000 تومان</h5>
                <h4>416,000 تومان</h4>
              </div>
            </div>
          </div>
          <div className="cart-pro">
            <div className="right-sec">
            <img
                src={process.env.PUBLIC_URL + "/assets/img/55a6c2cc48275acdbcf86a9ad2a9be2f.jpg"}
              />
              <div className="count">
                <InputGroup className="count-sec">
                  <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                  <InputNumber className={'custom-input-number'} value={value} onChange={setValue} />
                  <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                </InputGroup>
              </div>
            </div>
            <div className="left-sec">
              <Link className="link-ti" to={"/single-product"}>
                <div className="titel-pro">
                  <h2>شلوار جین زنانه مدل مام فیت</h2>
                  <i class="fa-solid fa-trash-can fa-xl"></i>
                </div>
              </Link>
              <div className="color-pro">
                <div className="col-itself"></div>
                <p>رنگ: آبی</p>
              </div>
              <div className="size-pro">
                <i className="fa-solid fa-arrows-up-down fa-xl "></i>
                <p>سایز: 2XL</p>
              </div>
              <div className="price-pro">
                <h5>450,000 تومان</h5>
                <h4>416,000 تومان</h4>
              </div>
            </div>
          </div>
          <div className="cart-pro">
            <div className="right-sec">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/d1725dcdc1938cf0af596beaf20ad453.jpg"}
            />
              <div className="count">
                <InputGroup className="count-sec">
                  <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                  <InputNumber className={'custom-input-number'} value={value} onChange={setValue} />
                  <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                </InputGroup>
              </div>
            </div>
            <div className="left-sec">
              <Link className="link-ti" to={"/single-product"}>
                <div className="titel-pro">
                  <h2>شلوار جین زنانه مدل مام فیت</h2>
                  <i class="fa-solid fa-trash-can fa-xl"></i>
                </div>
              </Link>
              <div className="color-pro">
                <div className="col-itself"></div>
                <p>رنگ: آبی</p>
              </div>
              <div className="size-pro">
                <i className="fa-solid fa-arrows-up-down fa-xl "></i>
                <p>سایز: 2XL</p>
              </div>
              <div className="price-pro">
                <h5>450,000 تومان</h5>
                <h4>416,000 تومان</h4>
              </div>
            </div>
          </div>
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
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} alt="" />
                  <p>ست زنانه</p>
                  <div className="rate-cath">
                    <h6>اسپرت زنانه</h6>
                    <div className="rate">
                      <h6>4.1</h6>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="price">
                    <h4>۱,۲۵۰,۰۰۰</h4>
                    <p>تومان</p>
                  </div>
                  <input type="button" value="افزودن به سبد خرید" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL + "/assets/img/women-img (11).png"} alt="" />
                  <p>ست زنانه</p>
                  <div className="rate-cath">
                    <h6>اسپرت زنانه</h6>
                    <div className="rate">
                      <h6>4.1</h6>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="price">
                    <h4>۱,۲۵۰,۰۰۰</h4>
                    <p>تومان</p>
                  </div>
                  <input type="button" value="افزودن به سبد خرید" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL + "/assets/img/8ff81791eba96c1bb5d90e483f96f7ba.jpg"} alt="" />
                  <p>ست زنانه</p>
                  <div className="rate-cath">
                    <h6>اسپرت زنانه</h6>
                    <div className="rate">
                      <h6>4.1</h6>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="price">
                    <h4>۱,۲۵۰,۰۰۰</h4>
                    <p>تومان</p>
                  </div>
                  <input type="button" value="افزودن به سبد خرید" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL + "/assets/img/a5e698cd697088e7f637645a748df3d1.jpg"} alt="" />
                  <p>ست زنانه</p>
                  <div className="rate-cath">
                    <h6>اسپرت زنانه</h6>
                    <div className="rate">
                      <h6>4.1</h6>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="price">
                    <h4>۱,۲۵۰,۰۰۰</h4>
                    <p>تومان</p>
                  </div>
                  <input type="button" value="افزودن به سبد خرید" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL + "/assets/img/blus-girl.png"} alt="" />
                  <p>ست زنانه</p>
                  <div className="rate-cath">
                    <h6>اسپرت زنانه</h6>
                    <div className="rate">
                      <h6>4.1</h6>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="price">
                    <h4>۱,۲۵۰,۰۰۰</h4>
                    <p>تومان</p>
                  </div>
                  <input type="button" value="افزودن به سبد خرید" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL + "/assets/img/girl.png"} alt="" />
                  <p>ست زنانه</p>
                  <div className="rate-cath">
                    <h6>اسپرت زنانه</h6>
                    <div className="rate">
                      <h6>4.1</h6>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="price">
                    <h4>۱,۲۵۰,۰۰۰</h4>
                    <p>تومان</p>
                  </div>
                  <input type="button" value="افزودن به سبد خرید" />
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}