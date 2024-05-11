import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"

export function loader(data) {
    return 0
}
export default function FrequentlyQuestion() {

    return (

        <>

<div class="question-subject-cathegory">
            <div id="question-subject">
                <div class="question-mark-icon">
                    <i class="fa-sharp fa-light fa-block-question fa-2xl"></i>

                </div>
                <div class="title">
                    <h2>موضوع پرسش شما چیست؟</h2>
                    <p>موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید</p>
                </div>
                <div class="search-topic">
                    <input type="search" placeholder="جستجوی موضوع"/>
                </div>
            </div>

            <div id="question-cathegory">
                <div class="sort-icon">

                    <i class="fa-light fa-grid fa-2xl"></i>
                </div>
                <div class="table-section">
                    <div class="title">
                        <h2>دسته‌بندی پرسش‌ها</h2>
                    </div>

                    <div class="table">

                        <div class="part1">
                            <Link to={"/frequently-answer"} href="#" class="first-line">
                                <div class="user-icon">
                                    <i class="fa-light fa-user fa-xl"></i>
                                </div>
                                <div class="text">
                                    <p>ورود و ثبت‌نام</p>
                                </div>
                            </Link>
                            <Link to={"/frequently-answer"} href="#" class="secend-line">
                                <div class="send-icon">
                                    <i class="fa-light fa-truck fa-xl"></i>
                                </div>
                                <div class="text">
                                    <p>پیگیری ارسال سفارش</p>
                                </div>
                            </Link>
                        </div>


                        <div class="part2">
                            <Link to={"/frequently-answer"} href="#" class="first-line">
                                <div class="arrow-icon">
                                    <i class="fa-solid fa-arrow-turn-down-left"></i> 
                                    <i class="fa-light fa-arrow-turn-down-left fa-xl"></i>
                                </div>
                                <div class="text">
                                    <p>بازگرداندن کالا</p>
                                </div>
                            </Link>
                            <Link to={"/frequently-answer"} href="#" class="secend-line">
                                <div class="shop-icon">
                                    <i class="fa-light fa-bag-shopping fa-xl"></i>
                                </div>
                                <div class="text">
                                    <p>روند ثبت سفارش</p>
                                </div>
                            </Link>
                        </div>

                        <div class="part3">
                            <Link to={"/frequently-answer"} href="#" class="first-line">
                                <div class="exchange-icon">
                                    <i class="fa-brands fa-stack-exchange fa-xl"></i>
                                </div>
                                <div class="text">
                                    <p>آخرین تغییرات</p>
                                </div>
                            </Link>
                            <Link to={"/frequently-answer"} href="#" class="secend-line">
                                <div class="other-icon">
                                    <i class="fa-light fa-ellipsis fa-2xl"></i>
                                </div>
                                <div class="text">
                                    <p>سایر موارد</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>










        </>

    )

}