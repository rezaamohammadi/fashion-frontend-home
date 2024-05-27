
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

export default function CallUs() {

    return (

        <>


<div id="call-us">
            <div className="box-call-us">
                <div className="titel">
                    <h1>تماس با ما</h1>
                </div>

                <div className="box1">
                    <div className="input-subject">
                        <p>موضوع *</p>
                        <select>
                            <option>ساخت حساب</option>
                            <option>ساخت حساب</option>
                            <option> ساخت حساب</option>
                        </select>
                    </div>

                    <div className="input-name">
                        <p>نام ونام خانوادگی*</p>
                        <input type="text" placeholder="نام خود را وارد کنید"/>
                    </div>

                </div>


                <div className="box2">

                    <div className="input-email">
                        <p>ایمیل *</p>
                        <input type="email" placeholder="ایمیل را وارد کنید"/>
                    </div>
                    <div className="input-phone">
                        <p>تلفن تماس*</p>
                        <input type="text" placeholder="شماره تماس را وارد کنید"/>
                    </div>

                </div>


                <div className="box3">
                    <div className="input-order-number">
                        <p>شماره سفارش</p>
                        <input type="text" placeholder="شماره سفارش را وارد کنید"/>
                    </div>
                </div>


                <div className="box4">
                    <div className="textarea">
                        <p>متن پیام*</p>
                        <textarea></textarea>
                    </div>
                </div>
                <input type="button" className="btn-btn" value="تایید و ارسال" />

            </div>
        </div>








        </>

    )

}