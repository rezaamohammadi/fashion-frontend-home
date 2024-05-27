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

export default function CodeOff() {

    return (

        <>

<div id="offf">
        <div class="title">
          <i class="fa-light fa-arrow-right"></i>
          <h4>کد تخفیف</h4>
        </div>
        <div class="details">

          <div class="items">
            <span>لطفا کد تخفیف هدیه فیزیکی خود را اینجا وارد کنید.</span>
            <input placeholder="کد تخفیف" />
            <a href="#">ثبت کد</a>


          </div>

        </div>

      </div>
        </>

    )

}