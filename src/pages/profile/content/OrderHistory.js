import { Link, Outlet } from "react-router-dom";

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

export default function OrderHistory() {
  return (
    <>
      <div id="order-history">
        <div class="history">
          <div class="title">
            <i class="fa-light fa-arrow-right"></i>
            <h4>تاریخچه سفارشات</h4>
          </div>
          <div class="details">
            <div class="menu">
              <div class="head1">
                <span>جاری</span>
                <span class="number">0</span>
              </div>
              <div class="head1">
                <span>تحویل شده</span>
                <span class="number">0</span>
              </div>
              <div class="head1">
                <span>مرجوع شده</span>
                <span class="number">0</span>
              </div>
              <div class="head1">
                <span>لغو شده</span>
                <span class="number">0</span>
              </div>
            </div>
          </div>



          <div class="items">
        <div class="item">
          <div class="item1">
            <i class="fa-sharp fa-solid fa-square-check"></i>
            <h5>تحویل شده</h5>
          </div>
          <Link to={"/profile/order-history-click"}>
            <i class="fa-light fa-chevron-left"></i>
          </Link>
        </div>

        <div class="details1">
          <h6>۳۰ شهریور ۱۴۰۲</h6>
          <h6>کد سفارش ۴۹۲۲۱۳۱</h6>
          <h6>مبلغ ۴۰۶,۰۰۰ تومان</h6>
          <h6>سود شما از خرید ۲۰,۴۰۰ تومان</h6>
        </div>

        <div class="images">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/carousel-baby1.png"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/img/carousel-baby2.png"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/img/carousel-baby3.png"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/img/carousel-baby4.png"}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/img/carousel-baby1.png"}
            alt=""
          />
        </div>
      </div>
   



        </div>
      </div>
    </>
  );
}
