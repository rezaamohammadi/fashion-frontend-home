
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

export default function SetInformation() {

    return (

        <>




<div id="set-information">
            <div className="box-set-information">
                <div className="titel">
                    <h2>انتخاب مشخصات</h2>
                </div>
                <div className="box1">
                    <div className="icon">

                        <i className="fa-solid fa-arrow-up-from-bracket fa-2xl"></i>
                    </div>

                    <div className="box2">
                        <div className="inputs-section">
                            <div className="input1">
                                <input type="text" placeholder="نام و نام خانوادگی"/>
                            </div>
                            <div className="text">
                                <h5>بعدا انجام میدهم</h5>
                            </div>
                        </div>

                        <div className="button">

                            <a href="#">ورود</a>
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