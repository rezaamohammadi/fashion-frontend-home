import { Link, Outlet, useLocation } from "react-router-dom";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import ProgressBar from "@badrap/bar-of-progress";

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

function App() {
  const location = useLocation()
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
  console.log(location.pathname)
  
  return (
    <>


      {location.pathname != '/home-page' && <nav>
        <div className="header">
          <div className="search">

          <div className="m1">
            <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
          </label>

          <ul class="menu__box">  
                <li>
                  <Link  to={"/home-page"}> صفحه اصلی</Link>
                </li>
                <li>
                  <Link to={"/category"}> دسته بندی</Link>
                </li>
                <li>
                  <Link to={"#"}> پرو آنلاین</Link>
                </li>
             
                <li>
                  <Link to={"/about-us"}> درباره ما</Link>
                </li>
                <li>
                  <Link to={"/call-us"}>تماس با ما </Link>
                </li>
                <li>
                  <Link to={"/guide"}>راهنمای استفاده </Link>
                </li>
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
                <li>
                  <Link to={"/home-page"}> صفحه اصلی</Link>
                </li>
                <li>
                  <Link to={"/category"}> دسته بندی</Link>
                </li>
                <li>
                <Link to={"#"}> پرو آنلاین</Link>
                </li>
             
                <li>
                  <Link to={"/about-us"}> درباره ما</Link>
                </li>
                <li>
                  <Link to={"/call-us"}>تماس با ما </Link>
                </li>
                <li>
                  <Link to={"/guide"}>راهنمای استفاده </Link>
                </li>
              </ul>
            </div>
   
          </div>

          <div className="login">
            <div className="l1">
              <a className="user" href="#">
                <i className="fa-regular fa-user"></i>
              </a>
              <div className="shop">

<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>




<div id="myDropdown" className="dropdown-content">
                <div className="cart">
                  <div className="item">
                    <div className="pic">
                      <img src={require("./assets/img/women-img (10).png")} alt="" />
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
                      <img src={require("./assets/img/women-short.png")} alt="" />

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
                      <img src={require("./assets/img/women-pants.png")} alt="" />

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
  >
  </i>
</Button>


</div>
              <Link className="entry" to={"/email-number"}>  وارد شوید </Link>
            
            </div>
          </div>
        </div>

        <div className="s2">
          <i className="fa-sharp fa-light fa-magnifying-glass"></i>
          <input placeholder="جستجو کنید" type="text" />
        </div>
      </nav>}



      <Outlet />








      <footer>
        <div class="our-services">
          <div class="service">
            <img src={require("./assets/img/icon-service.png")} alt="" />
            <div class="text">
              <p class="t1">تحویل اکسپرس</p>
              <p class="t2">در کمترین زمان</p>
            </div>
          </div>
          <div class="service">
            <img src={require("./assets/img/icon-service3.png")} alt="" />
            <div class="text">
              <p class="t1">ارسال رایگان</p>
              <p class="t2">ارسال به سراسر کشور</p>
            </div>
          </div>
          <div class="service">
            <img src={require("./assets/img/icon-service1.png")} alt="" />
            <div class="text">
              <p class="t1">ضمانت اصل‌بودن کالا</p>
              <p class="t2">تایید اصالت کالا</p>
            </div>
          </div>
          <div class="service">
            <img src={require("./assets/img/icon-service2.png")} alt="" />
            <div class="text">
              <p class="t1">پشتیبانی ۲۴ ساعته</p>
              <p class="t2">پشتیبانی حرفه ای</p>
            </div>
          </div>
        </div>
        <div class="data-section">
          <div class="access-link">
            <p class="title">با (اسم سایت)</p>
            <p>فروش در (سایت )</p>
            <p>اتاق خبر(سایت)</p>
            <p>درباره (سایت)</p>
          </div>
          <div class="access-link">
            <p class="title">خدمات مشتریان</p>
            <p>پاسخ به پرسش‌های متداول</p>
            <p>رویه‌های بازگرداندن کالا</p>
            <p>حریم خصوصی</p>
          </div>
          <div class="access-link">
            <p class="title">راهنمای خرید</p>
            <p>نحوه ثبت سفارش</p>
            <p>رویه ارسال سفارش</p>
            <p>شیوه‌های پرداخت</p>
          </div>
          <div class="Social-Networks-section">
            <p>همراه ما باشید</p>
            <div class="media">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div class="logo">
            <img src={require("./assets/img/71508c92e1339c52fabcac67c65490db.png")} alt="#" />
          </div>
        </div>

        <div class="Copyright-text-section">
          <p>
            تمامی مطالب، عکس ها و… متعلق به کامران صابری می باشد. طراحی توسط جمعی
            از برنامه نویسان تازه کار
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;