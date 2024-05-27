import { Link, Outlet } from "react-router-dom";
import FavProduct from "../../../components/cards/FavProduct";
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
              <FavProduct image={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}/>
              

              <FavProduct image={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}/>

              <FavProduct image={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}/>

              <FavProduct image={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}/>

              <FavProduct image={process.env.PUBLIC_URL + "/assets/img/blus-boy.png"}/>
              
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
