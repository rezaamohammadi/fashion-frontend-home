import { Link } from "react-router-dom"

export function loader(data) {
    return 0
}
export default function EmailExist() {

    return (

        <>


<div id="email-exist">
        <div className="box-email-exist">
            <div className="titel">
                <h2>رمز عبور</h2>
            </div>
            <div className="box1">
                <div className="icon">
                    <i className="fa-solid fa-key fa-2xl"></i>
                </div>

                <div className="box2">
                    <div className="inputs-section">
                        <div className="input1">
                            <input type="email" placeholder="ایمیل"/>
                        </div>
                        <div className="text">
                           <Link to={"/forget-password"}>رمز عبور خود را فراموش کرده اید؟</Link>
                        </div>
                    </div>

                    <div className="button">

                        <Link to={"/profile/profile-information"} href="#">ورود</Link>
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