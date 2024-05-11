import { Link, Outlet } from "react-router-dom"

export function loader(data) {
    return 0
}
export default function Opinions() {

    return (

        <>
<div id="opnions">
        <div class="title">
          <i class="fa-light fa-arrow-right"></i>
          <h4>دیدگاه ها</h4>
        </div>
        <div class="details">
          <div class="menu">
            <div class="head1">
              <a href="#">در انتظار ثبت نظر</a>
            </div>
            <div class="head1">
              <a href="#">دیدگاه های من</a>
            </div>


          </div>
          <div class="items">
            <section class="item">
              <Link to={"/single-product"}  class="product">
                <div class="product1">
                  <img     src={process.env.PUBLIC_URL + "/assets/img/damnman.png"} alt="#"/>
                  <span>لگینگ ورزشی مردانه کریویت مدل SS0227</span>
                </div>
                <a href="#">ثبت دیدگاه</a>
              </Link>
              <Link to={"/single-product"} class="product">
                <div class="product1">
                  <img   src={process.env.PUBLIC_URL + "/assets/img/damnman2.png"} alt="#"/>
                  <span>پیراهن ورزشی مردانه کرین مدل SS0226</span>
                </div>
                <a href="#">ثبت دیدگاه</a>
              </Link>
              <Link to={"/single-product"} class="product">
                <div class="product1">
                  <img   src={process.env.PUBLIC_URL + "/assets/img/damnman.png"} alt="#"/>
                  <span>پیراهن ورزشی مردانه کرین مدل SS0226</span>
                </div>
                <a href="#">ثبت دیدگاه</a>
              </Link>

            </section>
          </div>


        </div>

      </div>



        </>

    )

}