import "swiper/css";
import "swiper/css/navigation";

import * as React from "react";
import { Link } from "react-router-dom";
import { Form } from "usetheform";

export default function WizardSuggestion( { prevPage, ...props }) {
  return (
    <>
    <Form name="page6" {...props}>
      
    <div id="wizard-seggestion">
        <div class="wizard-seggestion-section">
            <div class="right-wizard-seggestion">
                <div class="top-wizard-seggestion">
                    <div class="wizard-product">
                        <img src={process.env.PUBLIC_URL+"assets/img/img.jpg"} width="100%" height="325px"/>
                        <div class="wizard-product-details">
                            <span>لباس دخترانه</span>
                            <div>
                                <span>اسپرت بچگانه</span>
                                <div>
                                    <span>4.1</span>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <span>۱,۲۵۰,۰۰۰ تومان</span>
                            <button><a href="#">افزودن به سبد خرید</a></button>
                        </div>
                    </div>
                    <div class="wizard-product">
                        <img src={process.env.PUBLIC_URL+"assets/img/1.jpg"} width="100%" height="325px"/>
                        <div class="wizard-product-details">
                            <span>لباس دخترانه</span>
                            <div>
                                <span>اسپرت بچگانه</span>
                                <div>
                                    <span>4.1</span>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <span>۱,۲۵۰,۰۰۰ تومان</span>
                            <button><a href="#">افزودن به سبد خرید</a></button>
                        </div>
                    </div>
                    <div class="wizard-product">
                        <img src={process.env.PUBLIC_URL+"assets/img/2.jpg"} width="100%" height="325px"/>
                        <div class="wizard-product-details">
                            <span>پیراهن آستین کوتاه پسرانه</span>
                            <div>
                                <span>اسپرت بچگانه</span>
                                <div>
                                    <span>4.1</span>
                                    <i class="fa-solid fa-star"></i>   
                                </div>
                            </div>
                            <span>۱,۲۵۰,۰۰۰ تومان</span>
                            <button><a href="#">افزودن به سبد خرید</a></button>
                        </div>
                    </div>
                </div>
                <div class="bottom-wizard-seggestion">
                    <button><a href="#">مشاهده پیشنهادات بیشتر</a></button>
                </div>
            </div>
            <div class="wizard-guide">
                <div class="wizard-step">
                    <span>۱.عکست رو
                        آپلود کن</span>
                </div>
                <div class="wizard-step">
                    <span>۲. دسته بندی رو انتخاب کن</span>
                </div>
                <div class="wizard-step">
                    <span>۳.پیشنهادهای 
                        من رو ببین</span>
                </div>
            </div>
        </div>
      </div>





    </Form>
    </>
  );
}
