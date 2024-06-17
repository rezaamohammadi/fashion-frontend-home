import "swiper/css";
import "swiper/css/navigation";
import { Range } from "react-range";
import * as React from "react";
import { Link } from "react-router-dom";
import { Form } from "usetheform";
import MultiRangeSlider from "../range/MultiRangeSlider";

export default function WizardDetail({ prevPage, ...props }) {
  return (
    <>
      <Form name="page5" {...props}>
        <div id="wizard-main">
          <div class="wizard-section">
            <div class="right-wizard right-section">
              <div class="top-right-wizard">
                <ul>
                  <li>
                    <span>مردانه</span>
                  </li>
                  <li>
                    <span>زنانه</span>
                  </li>
                  <li>
                    <span>بچگانه</span>
                  </li>
                </ul>
              </div>
              <div class="bottom-right-wizard right-detail">
                
                <div class="wizard-details more-detail">
                  <div class="wizard-price">
                    <span>بازه قیمت</span>
                    <MultiRangeSlider
                      min={0}
                      max={1000}
                      onChange={({ min, max }) =>
                        console.log(`min = ${min}, max = ${max}`)
                      }
                    />
                 
                  </div>
                  <div class="wizard-detail">
                    <span>نوع استایل</span>
                    <div class="each-item">
                      <div>
                        <span>مجلسی</span>
                        <input type="radio" name="style" />
                      </div>
                      <div>
                        <span>راحتی</span>
                        <input type="radio" name="style" />
                      </div>
                      <div>
                        <span>کژوال</span>
                        <input type="radio" name="style" />
                      </div>
                      <div>
                        <span>اسپرت</span>
                        <input type="radio" name="style" />
                      </div>
                      <div>
                        <span>اداری</span>
                        <input type="radio" name="style" />
                      </div>
                    </div>
                  </div>
                  <div class="wizard-detail">
                    <span>رنگ</span>
                    <div class="each-item">
                      <div>
                        <span>تیره</span>
                        <input type="radio" name="color" />
                      </div>
                      <div>
                        <span>روشن</span>
                        <input type="radio" name="color" />
                      </div>
                      <div>
                        <span>گرم</span>
                        <input type="radio" name="color" />
                      </div>
                      <div>
                        <span>سرد</span>
                        <input type="radio" name="color" />
                      </div>
                      <div>
                        <span>خنثی</span>
                        <input type="radio" name="color" />
                      </div>
                    </div>
                  </div>
                  <div class="wizard-detail">
                    <span>سایز</span>
                    <div class="each-item">
                      <div>
                        <span>S</span>
                        <input type="radio" name="size" />
                      </div>
                      <div>
                        <span>M</span>
                        <input type="radio" name="size" />
                      </div>
                      <div>
                        <span>L</span>
                        <input type="radio" name="size" />
                      </div>
                      <div>
                        <span>XL</span>
                        <input type="radio" name="size" />
                      </div>
                      <div>
                        <span>XXL</span>
                        <input type="radio" name="size" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="add-picture-btn">
                  <div class="right-btns">
                    <button type="submit" class="next-btn">
                      <a>بعدی</a>
                    </button>
                  </div>
                  <div class="left-btns">
                    <button onClick={prevPage}>
                      <a>قبلی</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="wizard-guide wizard-detail-guide">
              <div class="wizard-step">
                <span>۱.عکست رو آپلود کن</span>
              </div>
              <div class="wizard-step">
                <span>۲. دسته بندی رو انتخاب کن</span>
              </div>
              <div class="wizard-step">
                <span>۳.پیشنهادهای من رو ببین</span>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
