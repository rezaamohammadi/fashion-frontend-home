import { Link, Outlet } from "react-router-dom";

export function loader(data) {
  return 0;
}
export default function Favourite() {
  return (
    <>
      <div id="favourite">
        <div class="title">
          <i class="fa-light fa-arrow-right"></i>
          <h4>لیست ها</h4>
        </div>
        <div class="details">
          <div class="menu">
            <div class="head1">
              <h5>لیست ها علاقه مندی</h5>
            </div>
          </div>
          <div class="items">
            <section class="item">
              <Link to={"/single-product"} class="product">
                {" "}
                <div className="favorite-img">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}
                    alt="#"
                  />{" "}
                  <i class="fa-solid fa-heart fa-2xl"></i>{" "}
                </div>{" "}
                <h5 class="name">دورس مردانه</h5>{" "}
                <div class="rate">
                  {" "}
                  <p class="r1">اسپرت مردانه</p>{" "}
                  <div class="star">
                    {" "}
                    <span>4.1</span> <i class="fa-solid fa-star"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="cost">
                  {" "}
                  <p class="amount">۱,۲۵۰,۰۰۰</p> <p>تومان</p>{" "}
                </div>{" "}
                <a href="#">افزودن به سبد خرید</a>{" "}
              </Link>

              <Link to={"/single-product"} class="product">
                {" "}
                <div className="favorite-img">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}
                    alt="#"
                  />{" "}
                  <i class="fa-solid fa-heart fa-2xl"></i>{" "}
                </div>{" "}
                <h5 class="name">دورس مردانه</h5>{" "}
                <div class="rate">
                  {" "}
                  <p class="r1">اسپرت مردانه</p>{" "}
                  <div class="star">
                    {" "}
                    <span>4.1</span> <i class="fa-solid fa-star"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="cost">
                  {" "}
                  <p class="amount">۱,۲۵۰,۰۰۰</p> <p>تومان</p>{" "}
                </div>{" "}
                <a href="#">افزودن به سبد خرید</a>{" "}
              </Link>

              <Link to={"/single-product"} class="product">
                {" "}
                <div className="favorite-img">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}
                    alt="#"
                  />{" "}
                  <i class="fa-solid fa-heart fa-2xl"></i>{" "}
                </div>{" "}
                <h5 class="name">دورس مردانه</h5>{" "}
                <div class="rate">
                  {" "}
                  <p class="r1">اسپرت مردانه</p>{" "}
                  <div class="star">
                    {" "}
                    <span>4.1</span> <i class="fa-solid fa-star"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="cost">
                  {" "}
                  <p class="amount">۱,۲۵۰,۰۰۰</p> <p>تومان</p>{" "}
                </div>{" "}
                <a href="#">افزودن به سبد خرید</a>{" "}
              </Link>

              <Link to={"/single-product"} class="product">
                {" "}
                <div className="favorite-img">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}
                    alt="#"
                  />{" "}
                  <i class="fa-solid fa-heart fa-2xl"></i>{" "}
                </div>{" "}
                <h5 class="name">دورس مردانه</h5>{" "}
                <div class="rate">
                  {" "}
                  <p class="r1">اسپرت مردانه</p>{" "}
                  <div class="star">
                    {" "}
                    <span>4.1</span> <i class="fa-solid fa-star"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="cost">
                  {" "}
                  <p class="amount">۱,۲۵۰,۰۰۰</p> <p>تومان</p>{" "}
                </div>{" "}
                <a href="#">افزودن به سبد خرید</a>{" "}
              </Link>

              <Link to={"/single-product"} class="product">
                {" "}
                <div className="favorite-img">
                  {" "}
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}
                    alt="#"
                  />{" "}
                  <i class="fa-solid fa-heart fa-2xl"></i>{" "}
                </div>{" "}
                <h5 class="name">دورس مردانه</h5>{" "}
                <div class="rate">
                  {" "}
                  <p class="r1">اسپرت مردانه</p>{" "}
                  <div class="star">
                    {" "}
                    <span>4.1</span> <i class="fa-solid fa-star"></i>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="cost">
                  {" "}
                  <p class="amount">۱,۲۵۰,۰۰۰</p> <p>تومان</p>{" "}
                </div>{" "}
                <a href="#">افزودن به سبد خرید</a>{" "}
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
