import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

export default function SellCard(props) {
  return (
    <>
      <Link to={"/single-product"} className="the-pro">
        <img src={props.image1} alt="#" />
        <div className="pro-info">
          <div className="pro-imgs">
            {props.images.map((image) => (
              <img src={image} alt="#" />
            ))}
          </div>
          <p>
            ست زیبای تابستانه، محصولی از شرکت دیور با استفاده از پارچه کتان درجه
            یک، خنک و مینیمال.
          </p>
          <div className="pro-price">
            <h4>۱,۲۵۰,۰۰۰ تومان</h4>
            <button>افزودن به سبد خرید</button>
          </div>
        </div>
      </Link>
    </>
  );
}
