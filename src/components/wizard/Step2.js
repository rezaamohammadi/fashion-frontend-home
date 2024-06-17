import "swiper/css";
import "swiper/css/navigation";

import * as React from "react";
import { Link } from "react-router-dom";
import { Form } from "usetheform";

export default function Step2({ prevPage, ...props }) {
  return (
    <>
    <Form name="page2" {...props}>
      
    <div id="wizard-main">
            <div class="wizard-section">
                <div class="right-wizard">
                    <div class="top-right-wizard">
                        <ul>
                            <li><span>مردانه</span></li>
                            <li><span>زنانه</span></li>
                            <li><span>بچگانه</span></li>
                        </ul>
                    </div>
                    <div class="bottom-right-wizard">
                        <div class="add-picture">
                          <i class="fa-regular fa-image"></i>
                          <input type="file" hidden id="add-photo"/>
                          <label for="add-photo">تصویر پیراهن خود را آپلود کنید</label>
                        </div>
                        <div class="add-picture-btn">
                            <div class="right-btns">
                              <button type="submit">
                                <a >بعدی</a>
                              </button>
                              <button type="submit"><a >رد کردن</a></button>
                            </div>
                            <div class="left-btns">
                                <button onClick={prevPage}><a >قبلی</a></button>
                            </div>
                        </div>
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
