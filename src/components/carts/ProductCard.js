import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

export function loader(data) {
  return 0;
}
export default function ProductCard(props) {
  return (
    <>
      <Link to={"/single-product"}>
        <img src={props.image} />
        <p>لباس دخترانه</p>
        <div className="pro-rate">
          <h6>اسپرت بچگانه</h6>
          <span>4.1</span>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="pro-price">
          <p>۱,۲۵۰,۰۰۰</p>
          <span>تومان</span>
        </div>
        <button>افزودن به سبد خرید</button>
      </Link>
    </>
  );
}
