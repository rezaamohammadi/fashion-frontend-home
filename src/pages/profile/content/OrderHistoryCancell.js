import { Outlet } from "react-router-dom";

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

export default function OrderHistoryCancell() {
  return (
    <>
      <div id="history-cancell">
        <div class="title">
          <a href="#">
            {" "}
            <i class="fa-light fa-arrow-right"></i>
          </a>
          <h4>تاریخچه سفارشات</h4>
        </div>

        <div class="code">
          <div>
            <div class="code1">
              <p>کد پیگیری سفارش </p>
              <p class="b">۲۸۸۲۷۸۶۲۲</p>
            </div>
            <div class="code1">
              <p>تاریخ ثبت سفارش</p>
              <p class="b">۱۱ آبان ۱۴۰۲</p>
            </div>
          </div>
        </div>

        <div class="details">
          <div class="detail">
            <div class="d1">
              <p>تحویل گیرنده</p>
              <p class="b">ابوالفضل خلوصی دهقانپور</p>
            </div>
            <div class="d1">
              <span>شماره موبایل</span>
              <p class="b">۰۹۱۹۶۸۶۷۴۰۷</p>
            </div>
            <div class="d1">
              <p>آدرس</p>
              <p class="b">
                لاهیجان، خیابان امام خمینی، کوچه شهید حامدی، کوچه حکیم زاده، بعد
                از بن بست نصیری
              </p>
            </div>
          </div>
        </div>

        <div class="money">
          <div class="m1">
            <div class="m">
              <p>مبلغ</p>
              <p class="b">0تومان </p>
            </div>
          </div>
        </div>

        <div class="delivered">
          <div class="delivery">
            <div class="right">
              <div class="r1">
                <p>مرسوله۱از۱</p>
                <p class="b">ارسال عادی</p>
              </div>
              <div class="r1">
                <p>زمان تحویل:</p>
                <p class="b">سه‌شنبه ۴ مهر بازه ۱۰ - ۲۱ </p>
              </div>
              <div class="r2">
                <div class="r1">
                  <p>هزینه ارسال:</p>
                  <p class="b">۱۹,۰۰۰تومان</p>
                </div>
                <div class="r1">
                  <p>مبلغ مرسوله:</p>
                  <p class="b">۳۸۵,۶۰۰تومان</p>
                </div>
              </div>
            </div>
            <div class="left">
              <div class="customer-delivered">
                <p>لغو شده</p>
                <p class="line"></p>
              </div>
              <div class="c1">
                <p>کد پیگیری مرسوله:</p>
                <p class="b">۲۱۱۷۲۶۳۴۲</p>
              </div>
            </div>
          </div>
          <div class="product">
            <img src="./assets/img/img1/img.jpg" alt="#" />
            <div class="info">
              <h5>لباس دخترانه</h5>
              <div class="color">
                <span class="circle"></span>
                <p>مشکی</p>
              </div>
              <p>۱۷۷,۶۰۰تومان</p>
            </div>

            <div class="comment">
              <a href="#">
                ثبت دیدگاه
                <i class="fa-sharp fa-light fa-message"></i>
              </a>
            </div>
          </div>
          <div class="product">
            <img src="./assets/img/img1/img.jpg" alt="#" />
            <div class="info">
              <h5>لباس دخترانه</h5>
              <div class="color">
                <span class="circle"></span>
                <p>مشکی</p>
              </div>
              <p>۱۷۷,۶۰۰تومان</p>
            </div>

            <div class="comment">
              <a href="#">
                ثبت دیدگاه
                <i class="fa-sharp fa-light fa-message"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
