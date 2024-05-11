import { Link } from "react-router-dom"

export function loader(data) {
    return 0
}
export default function EmailNumber() {

    return (

        <>
   
   <div id="email-number">
        <div className="box-email-number">
            <div className="titel">
                <h2>ورود | ثبت‌نام</h2>
            </div>
            <div className="box1">
                <div className="icon">
                    <i className="fa-light fa-user fa-2xl"></i>

                </div>

                <div className="box2">
                    <div className="inputs-section">
                        <div className="input1">
                            <input type="email" placeholder="شماره موبایل یا ایمیل *"/>
                        </div>
                        <div className="login-section">
                            <a href="#">
                                <div className="part1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                                        viewBox="0 0 27 27" fill="none">
                                        <path
                                            d="M25.967 12.3H13.7404V15.94H22.4204C21.9804 21.02 17.7537 23.1934 13.7537 23.1934C8.64703 23.1934 4.16703 19.1667 4.16703 13.5C4.16703 8.03335 8.4337 3.80669 13.767 3.80669C17.887 3.80669 20.3004 6.43335 20.3004 6.43335L22.8337 3.79335C22.8337 3.79335 19.5804 0.166687 13.6337 0.166687C6.06037 0.166687 0.207031 6.56669 0.207031 13.5C0.207031 20.2334 5.7137 26.8334 13.8337 26.8334C20.967 26.8334 26.167 21.94 26.167 14.7134C26.167 13.18 25.967 12.3 25.967 12.3Z"
                                            fill="black" />
                                    </svg>
                                </div>
                                <div className="part2">
                                    <div></div>
                                </div>
                                <div className="part3">
                                    <h5> ورود با گوگل</h5>
                                    
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="button">

                        <Link to={"/email-exist"}>ورود</Link>
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