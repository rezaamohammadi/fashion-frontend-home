import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

export function loader(data) {
  return 0
}
export default function WomenSet() {

  return (
    <>


      <div id="off-add">
        <Link to={"/single-product"} className="add">
          <input type="button" value="مشاهده ست های تابستانی" />
        </Link>
        <div className="off">
          <div className="items">
            <div className="top">
              <h2>تخفیف هفته</h2>
              <h4>5:12:24</h4>
            </div>
            <div className="middle-bottom">
              <div className="middle">
                <h3>شلوار جین زاپ دار</h3>
                <p>شلوار زنانه</p>
              </div>
              <div className="bottom">
                <p>400,000 تومان</p>
                <p>300,000 تومان</p>
              </div>
            </div>
            <input type="button" value="افزودن به سبد خرید" />
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/img/pants.png"} alt="" />
        </div>
      </div>
      <div id="main-set">
        <Link to={"/single-product"} className="info">
          <h1>پرفروش هفته</h1>
          <p>
            همین الان پرفروش ترین استایل هفته رو با یه تخفیف ویژه بخر و آخر هفته
            بدرخش!!
          </p>
          <input type="button" value="مشاهده" />
        </Link>
        <div className="pics">
          <div className="main-pic">
            <img src={process.env.PUBLIC_URL + "/assets/img/women-hoodi.png"} alt="" />
          </div>
          <div className="other-pics">
            <div className="pic">
              <img src={process.env.PUBLIC_URL + "/assets/img/women-hoodiback.png"} alt="" />
              <h4>هودی</h4>
            </div>
            <div className="pic">
              <img src={process.env.PUBLIC_URL + "/assets/img/women-pants.png"} alt="" />
              <h4>شلوار</h4>
            </div>
            <div className="pic">
              <img src={process.env.PUBLIC_URL + "/assets/img/women-short.png"} alt="" />
              <h4>شلوارک</h4>
            </div>
          </div>
        </div>
        <div className="title"><h2>ست پرفروش هفته</h2></div>
      </div>
      <div id="pro-carousel">
        <div className="head">
          <h2>جدید ترین ست های زنانه</h2>
          <Link className="see-more" to={"/single-product"}>مشاهده همه</Link>
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
              <Link to={"/single-product"} className="product">                  <img src={process.env.PUBLIC_URL + "/assets/img/blus-girl.png"} alt="" />
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
              <Link to={"/single-product"} className="product">                  <img src={process.env.PUBLIC_URL + "/assets/img/girl.png"} alt="" />
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
      <div id="info">
        <div className="text">
          <h1>لورم ایپسوم</h1>
          <p>
            طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
            محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
            نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار
            اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال
            این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و
            نمی‌خواهد افراد روی متن های موجود تمرکز کنند.
          </p>
        </div>
        <div className="pic"><img src={process.env.PUBLIC_URL + "/assets/img/79a0143d074428201e610da478ffe601.png"} alt="" /></div>
      </div>
      <div id="pro-carousel">
        <div className="head">
          <h2>پرفروش ترین ست های زنانه</h2>
          <Link className="see-more" to={"/single-product"}>مشاهده همه</Link>
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
              <Link to={"/single-product"} className="product">                   <img src={process.env.PUBLIC_URL + "/assets/img/women-img (11).png"} alt="" />
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
              <Link to={"/single-product"} className="product">                   <img src={process.env.PUBLIC_URL + "/assets/img/8ff81791eba96c1bb5d90e483f96f7ba.jpg"} alt="" />
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
              <Link to={"/single-product"} className="product">                   <img src={process.env.PUBLIC_URL + "/assets/img/a5e698cd697088e7f637645a748df3d1.jpg"} alt="" />
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
              <Link to={"/single-product"} className="product">                   <img src={process.env.PUBLIC_URL + "/assets/img/blus-girl.png"} alt="" />
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
              <Link to={"/single-product"} className="product">                   <img src={process.env.PUBLIC_URL + "/assets/img/girl.png"} alt="" />
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

  )

}