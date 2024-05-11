import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Rating from "react-rating";
export function loader(data) {
  return 0;
}
export default function SingleProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div id="single-product">
        <div className="imgs">
          <div className="imgs-right">
            <img src={process.env.PUBLIC_URL + "/assets/img/image1.jpg"} />
            <img src={process.env.PUBLIC_URL + "/assets/img/image2.jpg"} />
            <img src={process.env.PUBLIC_URL + "/assets/img/image6.jpg"} />
            <img src={process.env.PUBLIC_URL + "/assets/img/image7.jpg"} />
            <img src={process.env.PUBLIC_URL + "/assets/img/image8.jpg"} />
          </div>
          <img src={process.env.PUBLIC_URL + "/assets/img/bigimage.jpg"} />
        </div>
        <div className="pro-info">
          <h1>شلوار جین مردانه مام‌فیت </h1>
          <div className="pro-size">
            <p>سایز شلوار :</p>
            <select>
              <option>34</option>
            </select>
          </div>
          {/* <div className="pro-qu">
                        <p>تعداد :</p>
                        <select>
                            <option>2</option>
                        </select>
                    </div> */}
          <div className="pro-color">
            <p>رنگ :</p>

            <div className="color-pal">
              <select>
                <option>انتخاب رنگ:</option>
                <option>بنفش</option>
                <option>نارنجی</option>
                <option>مشکی</option>
                <option>آبی</option>
              </select>
            </div>
          </div>{" "}
          <div className="pro-rate">
            {" "}
            <p>امتیاز شما:</p>{" "}
            <Rating
              emptySymbol={
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/star-empty.png"}
                  className="icon"
                />
              }
              fullSymbol={
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/star-full.png"}
                  className="icon"
                />
              }
            />
          </div>
          <div className="pro-price">
            <div className="r-sec">
              <i className="fa-regular fa-heart fa-xl"></i>
              <i className="fa-solid fa-share-nodes fa-xl"></i>
            </div>
            <div className="l-sec">
              <h2>۶۵۰,۰۰۰</h2>
              <h4>تومان</h4>
            </div>
          </div>
          <div className="guarant">
            <div className="right-gu">
              <div className="g1">
                <i className="fa-light fa-shield"></i>
                <h6>گارانتی اصالت فیزیکی کالا</h6>
              </div>
              <div className="g1">
                <i className="fa-light fa-truck-fast"></i>
                <h6>ارسال از دو روز کاری</h6>
              </div>
            </div>
            <div className="left-gu">
              <div className="g1">
                <i className="fa-solid fa-star"></i>
                <h6>4.5</h6>
              </div>
              <h6>45 دیدگاه</h6>
            </div>
          </div>
          <Link to={"/cart-page"} className="add-to-cart">
            افزودن به سبد خرید
          </Link>
        </div>
      </div>
      <div id="pro-carousel">
        <div className="head">
          <h2>جدید ترین ست های زنانه</h2>
          <Link to={"/all-product"} className="view-more">
            مشاهده همه
          </Link>
          {/* <input type="button" value="مشاهده همه" /> */}
        </div>
        <div className="products-section">
          <Swiper
            spaceBetween={30}
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL+"/assets/img/women123.png"} alt="" />
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
                  <img
                    src={process.env.PUBLIC_URL+"/assets/img/women-img (11).png"}
                    alt=""
                  />
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
                  <img
                    src={process.env.PUBLIC_URL+"/assets/img/8ff81791eba96c1bb5d90e483f96f7ba.jpg"}
                    alt=""
                  />
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
                  <img
                    src={process.env.PUBLIC_URL+"/assets/img/a5e698cd697088e7f637645a748df3d1.jpg"}
                    alt=""
                  />
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
                  <img src={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"} alt="" />
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
                  <img src={process.env.PUBLIC_URL+"/assets/img/girl.png"} alt="" />
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
      <div id="info-section">
        <div className="head">
          <h2>مشخصات</h2>
          <Link to={"/choose-compare"}>
            <p>مقایسه محصول</p>
          </Link>
        </div>
        <div className="inf">
          <div className="tit">
            <h5>جنس</h5>
            <h5>فاق</h5>
            <h5>مورد استفاده</h5>
            <h5>طرح</h5>
          </div>
          <div className="ans">
            <h5>جین</h5>
            <h5>بلند</h5>
            <h5>روزمره</h5>
            <h5>مام فیت</h5>
          </div>
        </div>
      </div>
      <div id="comment-section">
        <div className="head">
          <h2>دیدگاه کاربران</h2>
          <a href="#">
            <p>مشاهده همه</p>
          </a>
        </div>
        <div className="main">
          <div className="rates">
            <h5>ست شماره ۱</h5>
            <div className="rate-num">
              <h4>۴.۵ از ۵</h4>
              <h5>از مجموع 28 امتیاز کاربران</h5>
            </div>
            <div className="w3-container">
              <div className="title">
                <h6>ارزش خرید نسبت به قیمت</h6>
                <h5>۳</h5>
              </div>
              <div className="w3-border">
                <div className="w3-grey"></div>
              </div>
            </div>
            <div className="w3-container">
              <div className="title">
                <h6>کیفیت مواد به کار رفته</h6>
                <h5>۳</h5>
              </div>
              <div className="w3-border">
                <div className="w3-grey"></div>
              </div>
            </div>
            <div className="w3-container">
              <div className="title">
                <h6>راحتی</h6>
                <h5>۳</h5>
              </div>
              <div className="w3-border">
                <div className="w3-grey"></div>
              </div>
            </div>
            <div className="w3-container">
              <div className="title">
                <h6>فرم لباس روی بدن</h6>
                <h5>۳</h5>
              </div>
              <div className="w3-border">
                <div className="w3-grey"></div>
              </div>
            </div>
            <div className="w3-container">
              <div className="title">
                <h6>کیفیت طراحی و دوخت</h6>
                <h5>۳</h5>
              </div>
              <div className="w3-border">
                <div className="w3-grey"></div>
              </div>
            </div>

            <Button type="primary" onClick={showModal}>
              شما هم نظر خود را بنویسید
            </Button>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div id="add-comment-modal">
                <div class="top">
                  <div class="section1">
                    <h4>نوشتن دیدگاه</h4>
                  </div>
                  <div class="section2">
                    <img src={process.env.PUBLIC_URL+"/assets/img/girl3.png"} alt="" />
                    <div class="left">
                      <span>
                        شلوار جین بسیار زیبا و جادار مناسب برای همه جا بیاین
                        بخرین
                      </span>
                      <span> برند: دیور</span>
                    </div>
                  </div>
                </div>

                <div class="bottom">
                  <span>متن دیدگاه</span>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="متن دیدگاه را وارد کنید"
                  ></textarea>
                </div>
                <div class="button">
                  <a href="#"> ثبت دیدگاه</a>
                </div>
              </div>
            </Modal>
          </div>
          <div className="col-comment">
            <div className="comments">
              <div className="comment">
                <div className="title">
                  <p>ست مردانه شماره یک</p>
                  <span>۳</span>
                </div>
                <div className="cmnt">
                  <h5>امیر جعفری</h5>
                  <div className="title">
                    <h6>
                      فیت تنم بودم ، عروسی داداشم پوشیدم مخم زدم ، دمتون گرم از
                      بابت سایت خوبتون
                    </h6>
                    <div className="icons">
                      <i className="fa-light fa-reply"></i>
                      <i className="fa-light fa-thumbs-down"></i>
                      <i className="fa-light fa-thumbs-up"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-reply">
                <input type="text" className="txt-btn" value="پاسخ دهید.." />

                <Button className="btn-btn" type="primary" onClick={showModal}>
                  ثبت دیدگاه
                </Button>
              </div>

              <div className="replys">
                <div className="tx">
                  <div className="title">
                    <i className="fa-light fa-reply"></i>
                    <h5>مهدی دستوم</h5>
                  </div>
                  <div className="rep">
                    <h6>خوشبحالت که به آرزوت رسیدی ...</h6>
                  </div>
                </div>
                <div className="icons">
                  <i className="fa-light fa-reply"></i>
                  <i className="fa-light fa-thumbs-down"></i>
                  <i className="fa-light fa-thumbs-up"></i>
                </div>
              </div>
              <div className="replys">
                <div className="tx">
                  <div className="title">
                    <i className="fa-light fa-reply"></i>
                    <h5>رضا محمدی</h5>
                  </div>
                  <div className="rep">
                    <h6>اوووووف</h6>
                  </div>
                </div>
                <div className="icons">
                  <i className="fa-light fa-reply"></i>
                  <i className="fa-light fa-thumbs-down"></i>
                  <i className="fa-light fa-thumbs-up"></i>
                </div>
              </div>
            </div>
            <span></span>
            <div className="comments">
              <div className="comment">
                <div className="title">
                  <p>ست مردانه شماره یک</p>
                  <span>۳</span>
                </div>
                <div className="cmnt">
                  <h5>امیر جعفری</h5>
                  <div className="title">
                    <h6>
                      فیت تنم بودم ، عروسی داداشم پوشیدم مخم زدم ، دمتون گرم از
                      بابت سایت خوبتون
                    </h6>
                    <div className="icons">
                      <i className="fa-light fa-reply"></i>
                      <i className="fa-light fa-thumbs-down"></i>
                      <i className="fa-light fa-thumbs-up"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-reply">
                <input type="text" className="txt-btn" value="پاسخ دهید.." />

                <Button className="btn-btn" type="primary" onClick={showModal}>
                  ثبت دیدگاه
                </Button>
              </div>

              <div className="replys">
                <div className="tx">
                  <div className="title">
                    <i className="fa-light fa-reply"></i>
                    <h5>مهدی دستوم</h5>
                  </div>
                  <div className="rep">
                    <h6>خوشبحالت که به آرزوت رسیدی ...</h6>
                  </div>
                </div>
                <div className="icons">
                  <i className="fa-light fa-reply"></i>
                  <i className="fa-light fa-thumbs-down"></i>
                  <i className="fa-light fa-thumbs-up"></i>
                </div>
              </div>
              <div className="replys">
                <div className="tx">
                  <div className="title">
                    <i className="fa-light fa-reply"></i>
                    <h5>رضا محمدی</h5>
                  </div>
                  <div className="rep">
                    <h6>اوووووف</h6>
                  </div>
                </div>
                <div className="icons">
                  <i className="fa-light fa-reply"></i>
                  <i className="fa-light fa-thumbs-down"></i>
                  <i className="fa-light fa-thumbs-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
