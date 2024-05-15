import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <>
      <Link to={"/single-product"} className="product">
        <img src={props.image} alt="" />
        <p>ست زنانه</p>
        <div className="rate-cath">
          <h6>اسپرت زنانه</h6>
          <div className="rate">
            <h6>4.1</h6>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
        </div>
        <div className="price">
          <h4>۱,۲۵۰,۰۰۰</h4>
          <p>تومان</p>
        </div>
        <input type="button" value="افزودن به سبد خرید" />
      </Link>
    </>
  );
}
