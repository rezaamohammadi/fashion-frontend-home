import { Link, Outlet } from "react-router-dom";

export function loader(data) {
  return 0;
}
export default function Massages() {
  return (
    <>
      <div id="massages">
        <div class="title">
          <h4>پیغام ها </h4>
          <a href="#" class="t1">
            <i class="fa-light fa-trash"></i>
            <h6>حذف همه پیام‌ ها</h6>
          </a>
        </div>
        <div class="details">
          <div class="items">
            <section class="item">
              <div class="sub">
                <i class="fa-light fa-volume"></i>
                <h6>همه پیام‌ها</h6>
              </div>

              <div class="messages-failed">
                <div class="failed">
                  <div>
                    <i class="fa-sharp fa-light fa-receipt"></i>
                    <span>سفارش شما لغو شد</span>
                  </div>
                  <i className="icon" class="fa-solid fa-circle"></i>
                </div>
                <div class="failed2">
                  <h6>
                    {" "}
                    اگر مبلغ آن را واریز کرده‌اید، تا ۴۸ ساعت آینده آن را به شما
                    برمی‌گردانیم
                  </h6>
                  <div class="pro">
                    <Link to={"/single-product"}>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/carousel-baby2.png"}
                        alt=""
                      />
                    </Link>

                    <Link to={"/single-product"}>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/carousel-baby3.png"}
                        alt=""
                      />
                    </Link>

                    <Link to={"/single-product"}>
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/carousel-baby4.png"}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div class="date">
               
                  <h6 class="d1">۱۶ دی ۱۴۰۲</h6>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
