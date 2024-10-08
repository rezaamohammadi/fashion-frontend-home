import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/cards/ProductCard";
import ProgressBar from "@badrap/bar-of-progress";
import { useDispatch, useSelector } from "react-redux";
import { productsss } from "../../store/slices/ProductSlice";

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
    }, 1000)
    return true
}

export default function KidGirl() {
  const productss = useSelector(productsss);

  return (
    <>
      <div className="kid-boy">
        <div id="kid-cathegory">
          <div className="box-kids">
            <div className="baby">
              <Link to={"/kid-baby"}>
                {" "}
                <h2>نوزادی</h2>{" "}
              </Link>
            </div>
            <div className="girlish">
              <Link to={"/kid-girl"}>
                {" "}
                <h2>دخترانه</h2>{" "}
              </Link>
            </div>
            <div className="boyish">
              <Link to={"/kid-boy"}>
                {" "}
                <h2>پسرانه</h2>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div id="off-add">
          <div className="section1">
            <div className="part1">
              <div className="image">
                <Link to={"/kid-baby"} href="#">
                  مشاهده بیشتر
                </Link>
              </div>
            </div>
            <div className="part2">
              <div to={"/kid-boy"} v className="image1">
                <Link href="#">مشاهده بیشتر</Link>
              </div>
              <div className="image2">
                <Link to={"/kid-girl"} href="#">
                  مشاهده بیشتر
                </Link>
              </div>
            </div>
          </div>
          <div className="section2">
            <Link to={"/single-product"} className="part1">
              <div className="discount-week">
                <h2>5:12:24</h2>
                <h2>تخفیف هفته</h2>
              </div>
              <div className="image">
                <img src={process.env.PUBLIC_URL + "/assets/img/baby4.png"} alt="" />
              </div>
              <div className="product-information">
                <div className="product-name">
                  <div className="name">
                    <h3>اسم محصول</h3>
                  </div>
                  <div className="cost">
                    <h4>400,000 تومان</h4>
                  </div>
                </div>
                <div className="product-cathegory">
                  <div className="cathegory">
                    <h3>دسته بندی محصول</h3>
                  </div>
                  <div className="cost">
                    <h3>300,000 تومان</h3>
                  </div>
                </div>
                <a href="#">
                  <p>افزودن به سبد خرید</p>
                </a>
              </div>
            </Link>
          </div>
        </div>

        <div id="pro-carousel">
          <div className="head">
            <h2>جدید ترین ست های زنانه</h2>
            <Link to={"/all-product"}   >مشاهده همه</Link>
          </div>
          <div className="products-section">
            <Swiper
              spaceBetween={30}
              slidesPerView={4.4}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                868: {
                  slidesPerView: 3,
                },
                1192: {
                  slidesPerView: 4.4,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="swiper-wrapper">
              {productss.products.map((pro) => (
                <SwiperSlide>
                  <ProductCard
                    image={pro.image}
                    title={pro.title}
                   category={pro.categories.map((cat)=>(
                      cat
                    ))}
                    price={pro.price}
                    rate={pro.rate}
                  />
                </SwiperSlide>
              ))}
              </div>
            </Swiper>
          </div>
        </div>

        <div id="main-set-seller">
          <div className="head">
            <h2>ست های پرفروش دخترانه</h2>
            <Link to={"/sell-set"}   >مشاهده همه</Link>
          </div>

          <div className="main">
            <div className="info">
              <div className="info-part1">
                <h1>اسم ست</h1>
                <p>دسته بندی محصول</p>
                <h3>400,000 تومان</h3>
              </div>
              <div className="info-part2">
                <input type="button" value="افزودن به سبد خرید" />
              </div>
            </div>
            <div className="pics">
              <div className="main-pic">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/b2dac857378c5490ea7a9a2d520378ccbb34d404_1673344899.jpg"}
                  alt=""
                />
              </div>
              <div className="other-pics">
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/d5280fc0807f6fa3eee7e0e57cea8f1565a2cf72_1673344905.jpg"}
                    alt=""
                  />
                  <h4>هودی</h4>
                </div>
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/68359ac72d7d8ba8d9dfd1a4f11ec51c9af90c7a_1673344910.jpg"}
                    alt=""
                  />
                  <h4>شلوار</h4>
                </div>
                <div className="pic">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/d66924703667fa3237099fb9666d96b63ca25b23_1666188575.jpg"}
                    alt=""
                  />
                  <h4>شلوارک</h4>
                </div>
                <div className="pic4">
                  <img src={process.env.PUBLIC_URL + "assets/img/best-seller-baby3.png"} alt="" />
                  <h4>شلوارک</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="pro-carousel">
          <div className="head">
            <h2>جدید ترین ست های زنانه</h2>
            <Link to={"/all-product"}   >مشاهده همه</Link>
          </div>
          <div className="products-section">
            <Swiper spaceBetween={30}
              slidesPerView={4.4}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                868: {
                  slidesPerView: 3,
                },
                1192: {
                  slidesPerView: 4.4,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <div className="swiper-wrapper">
              {productss.products.map((pro) => (
                <SwiperSlide>
                  <ProductCard
                    image={pro.image}
                    title={pro.title}
                   category={pro.categories.map((cat)=>(
                      cat
                    ))}
                    price={pro.price}
                    rate={pro.rate}
                  />
                </SwiperSlide>
              ))}
              </div>
            </Swiper>
          </div>
        </div>

      </div>
    </>
  );
}
