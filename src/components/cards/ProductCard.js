import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { productsss } from "../../store/slices/ProductSlice";
import { useSelector } from "react-redux";
export default function ProductCard(props) {
 
  return (
    <>
   
 <Link to={"/single-product"} className="product">
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <div className="rate-cath">
          <h6>{props.category}</h6>
          <div className="rate">
            <h6>{props.rate}</h6>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
        </div>
        <div className="price">
          <h4>{props.price}</h4>
          <p>تومان</p>
        </div>
        <input type="button" value="افزودن به سبد خرید" />
      </Link>
   
     
    </>
  );
}
