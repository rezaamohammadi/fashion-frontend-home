import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import ProgressBar from "@badrap/bar-of-progress";
import { filter, productsss } from "../../store/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCategory } from "../../store/slices/DataManagerSlice";

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
  }, 1000);
  return true;
}
export default function AllProduct() {
  const productss = useSelector(productsss);
  const [categories, setCategories] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    const category = productss.products.map((pro) => pro.categories);
    const flattedcolor = category.flat();
    const uniqueCat = Array.from(new Set(flattedcolor));
    setCategories(uniqueCat);
   
  }, 0);
  return (
    <>
      <div id="all-product">
        <div id="cath-title">
          <h2>شلوارها</h2>
        </div>

        <div id="cath-btns">
          <button>پیراهن</button>
          <button>مانتو</button>
          <button>شلورها</button>
          <button>کفش‌ها</button>
          <button>تی‌شرت</button>
        </div>
        <Link to={"/single-product"} id="best-sell">
          <img
            src={
              process.env.PUBLIC_URL +
              "../assets/img/d7bdeef8f6fc3e741d94812ee2ad5f56.jpg"
            }
          />
          <div className="b-s-text">
            <a href="#">
              <h3>پرفروش این دسته</h3>
            </a>
            <a href="#">
              <h4>اسم محصول</h4>
            </a>
          </div>
          <div className="b-s-images">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/3fe108af6692564cb873016ee4b68310.jpg"
              }
            />
            <img src={process.env.PUBLIC_URL + "/assets/img/023.jpg"} />
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/f2314c5259d8536fc9690c48087fb3e2.jpg"
              }
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/92c9e58196b2e709b796a466cb4d6775.jpg"
              }
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/e4a350b39eeacd8087ca758647a8c4d3.jpg"
              }
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/img/sewing-tools_144627-41357.jpg"
              }
            />
          </div>
        </Link>
        <div className="mob-fil-sec">
          <i className="fa-solid fa-sliders"></i>
          <a href="#">فیلتر</a>
          <i className="fa-solid fa-arrow-down-wide-short"></i>
          <a href="#">پربازدیدترین</a>
        </div>
        <div className="tag-fil-tablet">
          <a href="#">پربازدیدترین</a>
          <a href="#">پرفروش‌ترین</a>
          <a href="#">جدیدترین</a>
          <a href="#">ارزان‌ترین</a>
          <a href="#">گران‌ترین</a>
          <a href="#">مرتبط‌ترین</a>
        </div>
      </div>

      <div id="all-main">
        <div id="filter-menu">
          <div className="filter1">
            <div className="fil1-txt">
              <h4>فیلتر</h4>
              <a href="#">حذف فیلتر</a>
            </div>
            <select>
              {" "}
              <option selected hidden>
                برند
              </option>{" "}
              <option>گزینه دوم</option> <option>گزینه سوم</option>{" "}
            </select>{" "}
            <select>
              {" "}
              <option selected hidden>
                محدوده قیمت
              </option>{" "}
              <option>گزینه دوم</option> <option>گزینه سوم</option>{" "}
            </select>{" "}
            <select>
              {" "}
              <option selected hidden>
                رنگ
              </option>{" "}
              <option>گزینه دوم</option> <option>گزینه سوم</option>{" "}
            </select>{" "}
            <select>
              {" "}
              <option selected hidden>
                سایز
              </option>{" "}
              <option>گزینه دوم</option> <option>گزینه سوم</option>{" "}
            </select>{" "}
            <select>
              {" "}
              <option selected hidden>
                جنس
              </option>{" "}
              <option>گزینه دوم</option> <option>گزینه سوم</option>{" "}
            </select>{" "}
            
            <select onChange={(e) =>  dispatch(filter(e.target.value))}>
              {" "}
              {categories.map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
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
        <div className="al-pro">
          <div className="tag-fil">
            <a href="#">پربازدیدترین</a>
            <a href="#">پرفروش‌ترین</a>
            <a href="#">جدیدترین</a>
            <a href="#">ارزان‌ترین</a>
            <a href="#">گران‌ترین</a>
            <a href="#">مرتبط‌ترین</a>
          </div>
          <div className="pro-row">
         
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.categories.map((cat) => cat)}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>
          <div className="pro-row">
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.categories.map((cat) => cat)}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>
          <div className="pro-row">
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.categories.map((cat) => cat)}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>

          <div className="pro-mobile">
            <Link to={"/single-product"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
            <Link to={"/single-product"}>
              {" "}
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
            <Link to={"/single-product"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
            <Link to={"/single-product"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
            <Link to={"/single-product"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
            <Link to={"/single-product"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
            <Link to={"/single-product"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/3fc9d210bb93f59f8ba6e874cc14b402.png"
                }
              />
              <div className="pro-mobile-text">
                <p>نام محصول</p>
                <h6>توضیحات اضافی</h6>
              </div>
              <div className="pro-price-mobile">
                <div className="p-p-m1">
                  <p>۱,۲۵۰,۰۰۰</p>
                  <span>تومان</span>
                </div>
                <div className="p-p-m1">
                  <span>4.1</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <i className="fa-regular fa-heart fa-xl"></i>
            </Link>
          </div>
          <div className="pagination">
            <i className="fa-solid fa-caret-left fa-xl"></i>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">...</a>
            <i className="fa-solid fa-caret-right fa-xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
