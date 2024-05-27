import { Outlet } from "react-router-dom"

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

export default function OrderHistoryClick() {

    return (

        <>
          
      <div id="history-click">
        <div class="title">
          <a href="#"> <i class="fa-light fa-arrow-right"></i></a>
          <span>تاریخچه سفارشات</span>
        </div>

        <div class="code">
          <div>
            <div class="code1">
              <span>کد پیگیری سفارش </span>
              <span class="b">۲۸۸۲۷۸۶۲۲</span>
            </div>
            <div class="code1">
              <span>تاریخ ثبت سفارش</span>
              <span class="b">۱۱ آبان ۱۴۰۲</span>
            </div>
          </div>
        </div>

        <div class="details">
          <div class="detail">
            <div class="d1">
              <span>تحویل گیرنده</span>
              <span class="b">ابوالفضل خلوصی دهقانپور</span>
            </div>
            <div class="d1">
              <span>شماره موبایل</span>
              <span class="b">۰۹۱۹۶۸۶۷۴۰۷</span>
            </div>
            <div class="d1">
              <span>آدرس</span>
              <span class="b">لاهیجان، خیابان امام خمینی، کوچه شهید حامدی، کوچه حکیم زاده، بعد از بن بست نصیری</span>
            </div>
          </div>
        </div>

        <div class="money">
          <div class="m1">
             
<div class="m">
              <span class="b">مبلغ  ۴۰۶,۰۰۰تومان </span>
              <span className="b"> مبلغ بعد از تخفیف ۲۰۶,۰۰۰ </span>
            </div>
            <div class="m">
              <span>سود شما از خرید</span>
              <span class="b">۲۰,۴۰۰تومان </span>
            </div>
            <span>پرداخت در محل (با کارت بانکی)</span>
            <div class="m">
              <span>هزینه ارسال (بر اساس وزن و حجم)</span>
              <span class="b">۱۹,۰۰۰تومان</span>
            </div>

            <div class="paid">
              <span>مبلغ سفارش - پرداخت موفق</span>
              <div class="cash">
                <span>۵ مهر ۱۴۰۲</span>
                <span class="b">۴۰۴,۶۰۰تومان </span>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div class="delivered">
          <div class="delivery">

            <div class="right">
              <div class="r1">
                <span>مرسوله۱از۱</span>
                <span class="b">ارسال عادی</span>
              </div>
              <div class="r1">
                <span>زمان تحویل:</span>
                <span class="b">سه‌شنبه ۴ مهر بازه ۱۰ - ۲۱ </span>
              </div>
              <div class="r2">
                <div class="r1">
                  <span>هزینه ارسال:</span>
                  <span class="b">۱۹,۰۰۰تومان</span>
                </div>
                <div class="r1">
                  <span>مبلغ مرسوله:</span>
                  <span class="b">۳۸۵,۶۰۰تومان</span>
                </div>
              </div>
            </div>
            <div class="left">
              <div class="customer-delivered">
                <span>تحویل مرسوله به مشتری </span>
                <span class="line"></span>
              </div>
              <div class="c1">
                <span>کد پیگیری مرسوله:</span>
                <span class="b">۲۱۱۷۲۶۳۴۲</span>
              </div>
            </div>
          </div>
          <div class="product">
            <img src="./assets/img/img1/img.jpg" alt="#"/>
            <div class="info">
              <h4>لباس دخترانه</h4>
              <div class="color">
                <span class="circle"></span>
                <span>مشکی</span>
              </div>
              <span>۱۷۷,۶۰۰تومان</span>
            </div>

            <div class="comment">
              <a href="#">ثبت دیدگاه
                <i class="fa-sharp fa-light fa-message"></i>
              </a>
            </div>
          </div>
          <div class="product">
            <img src="./assets/img/img1/img.jpg" alt="#"/>
            <div class="info">
              <h4>لباس دخترانه</h4>
              <div class="color">
                <span class="circle"></span>
                <span>مشکی</span>
              </div>
              <span>۱۷۷,۶۰۰تومان</span>
            </div>

            <div class="comment">
              <a href="#">ثبت دیدگاه
                <i class="fa-sharp fa-light fa-message"></i>
              </a>
            </div>
          </div>
        </div>






      </div>

        </>

    )

}