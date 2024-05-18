import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

export default function FavProduct(props) {
    return (
        <>
            <Link to={"/single-product"} class="product">
                {" "}
                <div className="favorite-img">
                    {" "}
                    <img
                        src={props.image}
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
        </>
    );
}
