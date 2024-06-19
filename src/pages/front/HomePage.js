import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "antd";
import ProductCard from "../../components/cards/ProductCard";
import ProgressBar from "@badrap/bar-of-progress";
import { selectMenus } from "../../store/slices/MenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMultipleForm } from "usetheform";
import Step1 from "../../components/wizard/Step1";
import Step2 from "../../components/wizard/Step2";
import Step3 from "../../components/wizard/Step3";
import Step4 from "../../components/wizard/Step4";
import WizardDetail from "../../components/wizard/WizardDetail";
import WizardSuggestion from "../../components/wizard/WizardSuggestion";
import * as React from 'react';


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


export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const themenu = useSelector(selectMenus);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const [getWizardState, wizard] = useMultipleForm();
  const onSubmitWizard = () => console.log(getWizardState());


  return (
    <>
      <div id="header-banner">
        <div className="header">
          <div className="search">
            <div className="m1">
              <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                  <span></span>
                </label>

                <ul>
                {themenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.path}>{menu.name}</a>
                  </li>                                                                                                                                                                                                                                                                                                                                                                                
                ))}
              </ul>
              </div>
            </div>
            <div className="s1">
              <i className="fa-sharp fa-light fa-magnifying-glass"></i>
              <input placeholder="جستجو" type="text" />
            </div>
          </div>

          <div className="navbar">
            <div className="logo-section">
              <h1>Fashion Startup</h1>
            </div>
            <span></span>
            <div className="menu">
              <ul>
                {themenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.path}>{menu.name}</a>
                  </li>                                                                                                                                                                                                                                                                                                                                                                                
                ))}
              </ul>

          
            </div>

          </div>
          <div className="login">
            <div className="l1">
              <a className="user" href="#">
                <i className="fa-regular fa-user"></i>
              </a>

              <div className="shop">
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >




<div id="myDropdown" className="dropdown-content">
                <div className="cart">
                  <div className="item">
                    <div className="pic">
                      <img src={process.env.PUBLIC_URL+"/assets/img/women-img (10).png"} alt="" />
                    </div>
                    <div className="info">
                      <div className="icon">
                        <i class="fa-solid fa-trash-can"></i>
                      </div>
                      <a href="#">
                        <p>شلوار جین مردانه مدل مام فیت</p>
                      </a>
                      <div className="size-color">
                        <div className="size">
                          <h6>سایز: 2XL</h6>
                        </div>
                        <div className="color">
                          <h6>رنگ: </h6><span></span>
                        </div>
                      </div>
                      <h5>450,000 تومان</h5>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pic">
                      <img src={process.env.PUBLIC_URL+"/assets/img/women-short.png"} alt="" />

                    </div>
                    <div className="info">
                      <div className="icon">
                        <i class="fa-solid fa-trash-can"></i>
                      </div>
                      <a href="#">
                        <p>شلوار جین مردانه مدل مام فیت</p>
                      </a>
                      <div className="size-color">
                        <div className="size">
                          <h6>سایز: 2XL</h6>
                        </div>
                        <div className="color">
                          <h6>رنگ: </h6><span></span>
                        </div>
                      </div>
                      <h5>450,000 تومان</h5>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pic">
                      <img src={process.env.PUBLIC_URL+"/assets/img/women-pants.png"} alt="" />

                    </div>
                    <div className="info">
                      <div className="icon">
                        <i class="fa-solid fa-trash-can"></i>
                      </div>
                      <a href="#">
                        <p>شلوار جین مردانه مدل مام فیت</p>
                      </a>
                      <div className="size-color">
                        <div className="size">
                          <h6>سایز: 2XL</h6>
                        </div>
                        <div className="color">
                          <h6>رنگ: </h6><span></span>
                        </div>
                      </div>
                      <h5>450,000 تومان</h5>
                    </div>
                  </div>
                  <h6>مبلغ قابل پرداخت:  <span>1,350,000 </span> تومان</h6>
                  <div className="button">
                    <Link className="black-btn" to={"/cart-page"} >مشاهده سبد خرید</Link>

                    <Link className="white-btn" to={"/complete-purchase"} >تسویه حساب</Link>


                  </div>
                </div>
              </div>





                </Modal>

                <Button type="primary" onClick={showModal}>
                  <i
                    onclick="myFunction()"
                    className="fa-sharp fa-light fa-bag-shopping fa-xl dropbtn"
                  ></i>
                </Button>
              </div>

              <Link className="entry-home" to={"/email-number"}>
                {" "}
                وارد شوید{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="s2">
          <i className="fa-sharp fa-light fa-magnifying-glass"></i>
          <input placeholder="جستجو کنید" type="text" />
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper-wrapper">
            {" "}
            <SwiperSlide>
              {" "}
              <Link to={"/all-product"} className="banner-image-link">
                {" "}
                <img src={process.env.PUBLIC_URL+"/assets/img/mhead.jpg"} alt="#" />{" "}
              </Link>{" "}
            </SwiperSlide>{" "}
            <SwiperSlide>
              {" "}
              <Link to={"/all-product"} className="banner-image-link">
                {" "}
                <img src={process.env.PUBLIC_URL+"/assets/img/mhead2.jpg"} alt="#" />{" "}
              </Link>{" "}
            </SwiperSlide>{" "}
            <SwiperSlide>
              {" "}
              <Link to={"/all-product"} className="banner-image-link">
                {" "}
                <img src={process.env.PUBLIC_URL+"/assets/img/mhead3.jpg"} alt="#" />{" "}
              </Link>{" "}
            </SwiperSlide>{" "}
            <SwiperSlide>
              {" "}
              <Link to={"/all-product"} className="banner-image-link">
                {" "}
                <img src={process.env.PUBLIC_URL+"/assets/img/mhead4.jpg"} alt="#" />{" "}
              </Link>{" "}
            </SwiperSlide>{" "}
          </div>
        </Swiper>
      </div>
 



      <div className="App">
     {currentPage=== 1 && (
       <Step1 {...wizard} onSubmit={nextPage} />
     )}
     {currentPage=== 2 && (
       <Step2
         {...wizard}
         prevPage={prevPage}
         onSubmit={nextPage}
       />
     )}
     {currentPage=== 3 && (
       <Step3
         {...wizard}
         prevPage={prevPage}
         onSubmit={nextPage}
       />
     )}
     {currentPage=== 4 && (
       <Step4
         {...wizard}
         prevPage={prevPage}
         onSubmit={nextPage}
       />
     )}
     {currentPage=== 5 && (
       <WizardDetail
         {...wizard}
         prevPage={prevPage}
         onSubmit={nextPage}
       />
     )}
     {currentPage=== 6&& (
       <WizardSuggestion
         {...wizard}
         prevPage={prevPage}
         onSubmit={onSubmitWizard}
       />
     )}
   </div>







      <div id="pro-preview">
        <div className="products-section">
          <div className="head">
            <div className="title">
              <h2>پیش نمایش محصول شما</h2>
            </div>

            <Link className="btn" to={"/all-product"}>
              {" "}
              مشاهده همه
            </Link>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              868: {
                slidesPerView: 2,
              },
              1192: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit1.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit2.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit4.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit2.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/girl.png"}/>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <a href="#" className="genral-picture">
          <img src={process.env.PUBLIC_URL+"/assets/img/general-picture.png"} alt="#" />
        </a>
        <div className="head-mobile">
          <div className="title">
            <h2>پیش نمایش محصول شما</h2>
          </div>
          <input type="button" className="btn" value="مشاهده همه" />
        </div>
      </div>
      <div id="set-sug">
        <div className="right-text">
          <h2>ست های مرتبط براساس انتخاب شما</h2>
          <div className="h3s">
            <h3>ست های مردانه</h3>
            <h3>ست های زنانه</h3>
            <h3>ست های بچه گانه</h3>
          </div>
        </div>
        <div className="products-section">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              868: {
                slidesPerView: 2,
              },
              1192: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit2.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit5.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/suit6.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/women-img32.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/girl.png"}/>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div id="pro-discounts">
        <div className="products-section">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              868: {
                slidesPerView: 2,
              },
              1192: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <Link to={"/single-product"} className="product">
                  <img src={process.env.PUBLIC_URL+"/assets/img/women-img32.png"} alt="" />
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
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/8ff81791eba96c1bb5d90e483f96f7ba.jpg"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/a5e698cd697088e7f637645a748df3d1.jpg"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"}/>
              </SwiperSlide>
              <SwiperSlide>
              <ProductCard image={process.env.PUBLIC_URL+"/assets/img/girl.png"}/>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="off">
          <div className="t-i">
            <h3>
              تخفیفات
              <br />
              شگفت
              <br />
              انگیز
            </h3>
            <i className="fa-light fa-percent fa-7x"></i>
          </div>

          <Link to={"/all-product"}>مشاهده همه</Link>
        </div>
      </div>
      <div id="img-cathegory">
        <a href="#">
          <img src={process.env.PUBLIC_URL+"/assets/img/mens-img.png"} alt="" />
        </a>
        <a href="#">
          <img src={process.env.PUBLIC_URL+"/assets/img/kids-img.png"} alt="" />
        </a>
        <a href="#">
          <img src={process.env.PUBLIC_URL+"/assets/img/womens-img.png"} alt="" />
        </a>
      </div>
      <div id="pro-carousel">
        <div className="head">
          <h2>پر فروش ترین ها</h2>

          <Link to={"/all-product"}>مشاهده همه</Link>
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
              <SwiperSlide> <ProductCard image={process.env.PUBLIC_URL+"/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"}/>
              
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/294928046418399cfce47e85c7f41b6b.png"}/>
            
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/damnkid.png"}/>
             
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/0a31f8c3cf708c6ae1bfe12d3b2c7a70.png"}/>
               
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"}/>
             
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/girl.png"}/>
             
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div id="pro-carousel">
        <div className="head">
          <h2>پر بازدیدترین های ما</h2>
          <Link to={"/all-product"}>مشاهده همه</Link>
        </div>
        <div to={"/single-product"} className="products-section">
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
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/summer-style.png"}/>
               
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/summer-style2.png"}/>
             
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/damnman.png"}/>
                
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/damnman2.png"}/>
               
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/blus-girl.png"}/>
                
              </SwiperSlide>
              <SwiperSlide><ProductCard image={process.env.PUBLIC_URL+"/assets/img/girl.png"}/>
              
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
