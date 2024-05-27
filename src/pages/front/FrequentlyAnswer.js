import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import ProgressBar from "@badrap/bar-of-progress";

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

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };
    return (
        <div>
            {items.map((item, index) => (
                <div key={item.title}>
                    <button onClick={() => handleClick(index)}>{item.title}</button>
                    {index === activeIndex && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    );
}
export default function FrequentlyAnswer() {
    const items = [
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                    است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        },
        {
            title: <a href="#" id="ques" className="accordion">چگونه می توانم سفارش خود را در دیجی استایل ثبت کنم ؟</a>,
            content: <div className="panel">
                <h4>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.


                </h4>
                <button>ارسال پیام</button>
            </div>
        }
    ]
    return (

        <>


            <div className="frequently-answer-section">
                <div id="question-subject">
                    <div className="question-mark-icon">
                        <i className="fa-sharp fa-light fa-block-question fa-2xl"></i>

                    </div>
                    <div className="title">
                        <h2>موضوع پرسش شما چیست؟</h2>
                        <p>موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید</p>
                    </div>
                    <div className="search-topic">
                        <input type="search" placeholder="جستجوی موضوع" />
                    </div>
                </div>

                <div id="frequently-answer">

                    <div className="acardions">

                        <div className="title">
                            <i className="fa-sharp fa-light fa-shirt fa-xl"></i>
                            <h2>روند ثبت سفارش:</h2>
                        </div>



                        <div id="ques">
                            <Accordion items={items} />
                        </div>

















                    </div>
                </div>


                <div id="suport">
                    <div className="support-question">
                        <h2>پاسخ پرسش خود را پیدا نکردید؟</h2>
                    </div>

                    <div className="support-information">
                        <div className="call-us">
                            <div className="box-call-us">
                                <i className="fa-sharp fa-light fa-phone fa-xl"></i>
                                <h3>با ما تماس بگیرید</h3>
                            </div>
                            <h2>۰۲۱ - ۶۱۹۳۰۳۰۰</h2>
                        </div>



                        <div className="message-part">
                            <div className="part1">
                                <i className="fa-sharp fa-light fa-envelope fa-xl"></i>
                                <h3> پیام</h3>
                            </div>
                            <div className="part2">
                                <a href="#">
                                    ارسال پیام
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>





        </>

    )

}