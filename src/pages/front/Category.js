import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import CathCart from "../../components/cards/CategoryCard.js";
export function loader(data) {
  return 0;
}
export default function Cathegory() {
  return (
    <>
      <div id="categories">
        <div class="section1">
          <span> مردانه</span>
          <div class="category1">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                868: {
                  slidesPerView: 4,
                },
                1192: {
                  slidesPerView: 5,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 4.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 3.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 2.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 6.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div class="section1">
          <span> زنانه</span>
          <div class="category1">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                868: {
                  slidesPerView: 4,
                },
                1192: {
                  slidesPerView: 5,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 6.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 3.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 4.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div class="section1">
          <span> بچگانه</span>
          <div class="category1">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                868: {
                  slidesPerView: 4,
                },
                1192: {
                  slidesPerView: 5,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 3.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 4.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 2.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CathCart
                    image={process.env.PUBLIC_URL + "/assets/img/img 5.avif"}
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
