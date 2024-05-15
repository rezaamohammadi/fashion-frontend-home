import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
export default function CategoryCard(props) {
  return (
    <>
      <Link class="item" to={"/all-product"}>
        {" "}
        <img src={props.image} /> <span>پیراهن</span>
      </Link>
    </>
  );
}
