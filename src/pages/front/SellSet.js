import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from 'react-router-dom';

export function loader(data) {
    return 0
}
export default function SellSet() {

    return (

        <>

            <div id="set-main">

                <div id="filter-menu">
                    <div className="filter1">
                        <div className="fil1-txt">
                            <h4>فیلتر</h4>
                            <a href="#">حذف فیلتر</a>
                        </div>
                        <select>
                            <option>برند</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                        <select>
                            <option>محدوده قیمت</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                        <select>
                            <option>رنگ</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                        <select>
                            <option>سایز</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                        <select>
                            <option>جنس</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                    </div>
                    <div className="filter-daste">
                        <h4>دسته بندی</h4>
                        <select>
                            <option>زنانه</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                        <select>
                            <option>مردانه</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                        <select>
                            <option>بچگانه</option>
                            <option>گزینه دوم</option>
                            <option>گزینه سوم</option>
                        </select>
                    </div>
                    <div className="filter-toggle">
                        <div className="f-tog">
                            <h4>فقط فروش ویژه</h4>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="f-tog">
                            <h4>فقط کالاهای موجود</h4>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="set-products" >
                    <div className="tab-mob-fil">
                        <i className="fa-solid fa-sliders"></i>
                        <p>فیلتر</p>
                        <i className="fa-solid fa-arrow-down-wide-short"></i>
                        <p>پربازدیدترین</p>
                    </div>
                    <div className="tag-fil">
                        <a href="#">پربازدیدترین</a>
                        <a href="#">پرفروش‌ترین</a>
                        <a href="#">جدیدترین</a>
                        <a href="#">ارزان‌ترین</a>
                        <a href="#">گران‌ترین</a>
                        <a href="#">مرتبط‌ترین</a>
                    </div>
                    <div className="pro-sec">
                        <Link to={"/single-product"} className="the-pro">
                            <img src={process.env.PUBLIC_URL + "/assets/img/7700d0194fdfcab2a28f8c6b0428b033.png"} alt="#" />
                            <div className="pro-info">
                                <div className="pro-imgs">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 50.png"} alt="#" />
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 51.png"} alt="#" />
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 52.png"} alt="#" />
                                </div>
                                <p>ست زیبای تابستانه، محصولی از شرکت دیور با استفاده از پارچه کتان درجه یک، خنک و مینیمال.</p>
                                <div className="pro-price">
                                    <h4>۱,۲۵۰,۰۰۰ تومان</h4>
                                    <button>افزودن به سبد خرید</button>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/single-product"} className="the-pro">
                            <img src={process.env.PUBLIC_URL + "/assets/img/b65e352a2633d37ea06482ece6cf076c.png"} alt="#" />
                            <div className="pro-info">
                                <div className="pro-imgs">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 55.png"} alt="#" />
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 54.png"} alt="#" />
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 53.png"} alt="#" />
                                </div>
                                <p>ست زیبای تابستانه، محصولی از شرکت دیور با استفاده از پارچه کتان درجه یک، خنک و مینیمال.</p>
                                <div className="pro-price">
                                    <h4>۱,۲۵۰,۰۰۰ تومان</h4>
                                    <button>افزودن به سبد خرید</button>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/single-product"} className="the-pro">
                            <img src={process.env.PUBLIC_URL + "/assets/img/87e8e63c28a6cf41a54fe756b6b1711b.png"} alt="#" />
                            <div className="pro-info">
                                <div className="pro-imgs">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 58.png"} alt="#" />
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 59.png"} alt="#" />
                                    <img src={process.env.PUBLIC_URL + "/assets/img/Rectangle 60.png"} alt="#" />
                                </div>
                                <p>ست زیبای تابستانه، محصولی از شرکت دیور با استفاده از پارچه کتان درجه یک، خنک و مینیمال.</p>
                                <div className="pro-price">
                                    <h4>۱,۲۵۰,۰۰۰ تومان</h4>
                                    <button>افزودن به سبد خرید</button>
                                </div>
                            </div>
                        </Link>


                    </div>




                </div>


            </div>

        </>

    )

}