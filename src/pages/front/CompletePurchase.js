import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
};

export default function CompletePurchase() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (

        <>
<div id="complete-purchase">
      <div class="box-complete-purchase">


        <div id="icons">
          <div class="cart">
            <i class="fa-light fa-cart-shopping fa-2xl"></i>
          </div>
          <div class="span1">
            <span></span>
          </div>
          <div class="lok">

            <i class="fa-sharp fa-light fa-location-dot fa-2xl"></i>
          </div>
          <div class="span1">
            <span></span>
          </div>
          <div class="card">
            <i class="fa-solid fa-credit-card fa-2xl"></i>
          </div>
        </div>

        <div id="buy">
          <div class="text-section">
         
            
<div class="text"> <div> <input type="radio" name="address" /> <h5>لاهیجان، خیابان امام خمینی، کوچه شهید حامدی، کوچه حکیم زاده، بعد از بن بست نصیری</h5> </div> <div> <input type="radio" name="address" /> <h5>لاهیجان، خیابان امام خمینی، کوچه شهید حامدی، کوچه حکیم زاده، بعد از بن بست نصیری</h5> </div> <div> <input type="radio" name="address" /> <h5>لاهیجان، خیابان امام خمینی، کوچه شهید حامدی، کوچه حکیم زاده، بعد از بن بست نصیری</h5> </div> </div>
            
            <div class="button-add-address">
            <Button onClick={handleOpen}>
               <a href="#">افزودن آدرس جدید</a>
              </Button>
           

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <div id="details-address">
      <div class="title">
        <span class="t1">آدرس جدید</span>
        <i class="fa-sharp fa-light fa-xmark-large"></i>
      </div>
      <div class="postal">
        <div class="postal-address">
          <span>نشانی پستی*</span>
          <input type="text" placeholder="خ. ولیعصر، بعد از م. ونک، خ. شریفی"/>
          <span class="t1">آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است.</span>
          <a href="#" class="edit">
            <span>اصلاح موقعیت مکانی روی نقشه</span>
            <i class="fa-light fa-chevron-left"></i>
          </a>
        </div>
        <div class="zone">
          <div class="area">
            <div class="province">
              <span>استان*</span>
              <select>
                <option>گیلان</option>
                <option>مازندران</option>
                <option>گلستان</option>
              </select>
            </div>
            <div class="city">
              <span>شهر*</span>
              <select>
                <option>لاهیجان</option>
                <option>رشت</option>
                <option>لنگرود</option>
              </select>
            </div>

          </div>
          <div class="neighborhood">
            <span>محله*</span>
            <select>
              <option>پردسر</option>
              <option>حاجی آباد</option>
              <option>پمپ بنزین</option>
            </select>
          </div>

          <div class="house-number">
            <div class="number">
              <span>پلاک*</span>
              <input type="text"/>
            </div>
            <div class="floor">
              <span>واحد </span>
              <input type="text"/>
            </div>
            <div class="code-posti">
              <span>کدپستی* </span>
              <input type="text"/>
            </div>
          </div>
        </div>

       



      </div>

      <button> ثبت آدرس</button>

    </div>

              </Box>
            </Modal>
            
            </div>
          </div>

          <div class="payment-method-section">
            <div class="title">
              <h2>انتخاب شیوه پرداخت</h2>
            </div>
            <div class="payment">


              <div class="vallet">
                <div class="checkbox1">
                  <input type="checkbox" name="p"/>
                </div>
                <div class="description">
                  <p>پرداخت با کیف پول</p>
                  <p>موجودی: 0 تومان</p>
                </div>
              </div>

              <div class="internet">
                <div class="checkbox1">
                  <input type="checkbox" name="p"/>
                </div>
                <div class="description">
                  <p>پرداخت اینترنتی</p>
                  <p>پرداخت اینترنتی (قابل پرداخت با تمامی کارت های عضو شتاب)</p>
                </div>
              </div>

              <div class="place">
                <div class="checkbox1">
                  <input type="checkbox" name="p"/>
                </div>
                <div class="description">
                  <p>پرداخت در محل</p>
                  <p>(قابل پرداخت با تمامی کارت های بانکی)</p>
                </div>
              </div>

            </div>
          </div>



          <div class="amount-section">

            <div class="section1">
              <div class="total-amount">
                <h4>مبلغ کل خرید </h4>
              </div>

              <div class="price">
                <h4>0,000,000 تومان</h4>
              </div>
            </div>

            <div class="section2">
              <div class="shipping-cost">
                <h4>هزینه ارسال و بسته بندی </h4>
              </div>

              <div class="price">
                <h4>0,000,000 تومان</h4>
              </div>
            </div>

            <div class="section3">
              <div class="discount">
                <h4>تخفیف </h4>
              </div>

              <div class="price">
                <h4>0,000,000 تومان</h4>
              </div>
            </div>

            <div class="section4">
              <div class="final-amount">
                <h4>مبلغ قابل پرداخت</h4>
              </div>

              <div class="price">
                <h4>0,000,000 تومان</h4>
              </div>
            </div>
          </div>




        </div>













        <div id="buy-btn">
          <a href="#">تکمیل خرید</a>
        </div>

        <div id="order">

          <Link to={"/single-product"} class="post1">
            <div class="image">
            <img src={process.env.PUBLIC_URL + "/assets/img/Frame694.png"} />
            </div>
            <div class="information">
              <div class="product">
                <h2>مانتو</h2>
              </div>
              <div class="model">
                <h4>مانتو کتی زنانه مدل A23739</h4>
              </div>
              <div class="size-number">
                <h4>سایز: M</h4>
                <h4>تعداد: 1</h4>
              </div>
            </div>
          </Link>

          <Link to={"/single-product"} class="post1">
            <div class="image">
            <img src={process.env.PUBLIC_URL + "/assets/img/Frame694.png"} />
            </div>
            <div class="information">
              <div class="product">
                <h2>مانتو</h2>
              </div>
              <div class="model">
                <h4>مانتو کتی زنانه مدل A23739</h4>
              </div>
              <div class="size-number">
                <h4>سایز: M</h4>
                <h4>تعداد: 1</h4>
              </div>
            </div>
          </Link>


        </div>
      </div>



    </div>

        </>

    )

}