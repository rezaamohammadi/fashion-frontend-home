import "swiper/css";
import "swiper/css/navigation";

import * as React from "react";
import { Link } from "react-router-dom";

export default function OpnionCard(props) {
  return (
    <>
      <Link to={"/single-product"} class="product">
        <div class="product1">
          <img src={props.image} alt="#" />
          <span>لگینگ ورزشی مردانه کریویت مدل SS0227</span>
        </div>
        <a href="#">ثبت دیدگاه</a>
      </Link>
    </>
  );
}
