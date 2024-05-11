import { Outlet } from "react-router-dom"

export function loader(data) {
    return 0
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