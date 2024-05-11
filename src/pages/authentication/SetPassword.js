import { Link } from "react-router-dom"

export function loader(data) {
    return 0
}
export default function SetPassword() {

    return (

        <>



<div id="set-password">
        <div className="box-set-password">
            <div className="titel">
                <h2>انتخاب رمز عبور</h2>
            </div>
            <div className="box1">
                <div className="icon">
                    <i className="fa-solid fa-key fa-2xl"></i>
                </div>

                <div className="box2">
                    <div className="inputs-section">
                        <div className="input1">
                            <input type="text" placeholder="رمز عبور"/>
                        </div>
                        <div className="input2">
                            <input type="text" placeholder="تکرار رمز عبور "/>
                        </div>
                      
                    </div>

                    <div className="button">
                        <Link  to={"/set-information"}>ثبت نام</Link>
                    </div>

                    <div className="foot-note">
                        <p>با ورود و یا ثبت نام در فشن استارتاپ، شما شرایط و قوانین استفاده از تمام سرویس های سایت و قوانین حریم خصوصی آن را می‌پذیرید.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>












        </>

    )

}