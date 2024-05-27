import { Link } from "react-router-dom"
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

export default function NumberExist() {

    return (

        <>


            <div id="number-exist">
                <div className="box-number-exist">
                    <div className="titel">
                        <h2>کد تایید</h2>
                    </div>
                    <div className="box1">
                        <div className="icon">
                            <i className="fa-solid fa-key fa-2xl"></i>
                        </div>

                        <div className="box2">
                            <div className="inputs-section">
                                <div className="input1">
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                    <input type="number" />
                                </div>
                                <div className="text">
                                    <h5>کد تایید  ارسال شده به شماره تلفن خود را وارد کنید</h5>
                                </div>

                            </div>

                            <div className="button">
                                <Link to={"/profile/profile-information"} href="#">ورود</Link>
                            </div>

                            <div className="foot-note">
                                <p>با ورود و یا ثبت نام در فشن استارتاپ، شما شرایط و قوانین استفاده از تمام سرویس های سایت و
                                    قوانین حریم خصوصی آن را می‌پذیرید.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>








        </>

    )

}