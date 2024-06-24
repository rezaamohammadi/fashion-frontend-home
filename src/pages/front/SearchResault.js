import { Link } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import ProgressBar from "@badrap/bar-of-progress";
import { productsss } from "../../store/slices/ProductSlice";
import { useSelector } from "react-redux";

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

export default function SearchResault() {
  const productss = useSelector(productsss);
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
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.category}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>
          <div class="pro-row">
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.category}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>
          <div class="pro-row">
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.category}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>
          <div class="pro-row">
            {productss.products.slice(0, 3).map((pro) => (
              <ProductCard
                image={pro.image}
                title={pro.title}
                category={pro.category}
                price={pro.price}
                rate={pro.rate}
              />
            ))}
          </div>
          <button class="more-btn">نمایش نتایج بیشتر...</button>
        </div>
      </div>
    </>
  );
}
