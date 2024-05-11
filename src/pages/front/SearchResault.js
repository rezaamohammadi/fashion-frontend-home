import { Link } from 'react-router-dom';

export function loader(data) {
    return 0
}
export default function SearchResault() {

    return (

        <>




            <div id="searchbar">
                <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                <input type="text" />
            </div>

            <div id="search-resault">

                <div class="side-filters">
                    <div class="filter1">
                        <div class="fil1-txt">
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
                    <div class="filter-daste">
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
                    <div class="filter-toggle">
                        <div class="f-tog">
                            <h4>فقط فروش ویژه</h4>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                        <div class="f-tog">
                            <h4>فقط کالاهای موجود</h4>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="products">
                    <div class="filter-resu">
                        <div class="f-resu">
                            <i class="fa-solid fa-bars fa-lg"></i>
                            <h3>فیلترها</h3>
                        </div>
                        <h3>ده نتیجه برای سرچ شما</h3>
                    </div>
                    <div class="pro-row">
                        <Link to={"/single-product"}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                    </div>
                    <div class="pro-row">
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women-pants.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women-short.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                    </div>
                    <div class="pro-row">
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women-hoodiback.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women123.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                    </div>
                    <div class="pro-row">
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/nike-girl.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/women1.jpg"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                        <Link to={"/single-product"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/tshirt-girl.png"} />
                            <p>لباس دخترانه</p>
                            <div class="pro-rate">
                                <h6>اسپرت بچگانه</h6>
                                <span>4.1</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="pro-price">
                                <p>۱,۲۵۰,۰۰۰</p>
                                <span>تومان</span>
                            </div>
                            <button>افزودن به سبد خرید</button>
                        </Link>
                    </div>
                    <button class="more-btn">نمایش نتایج بیشتر...</button>
                </div>
            </div>




        </>

    )

}