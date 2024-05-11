import { Outlet } from "react-router-dom"
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export function loader(data) {
    return 0
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
};
export default function Addresses() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opena, setOpena] = React.useState(false);
  const handleOpena = () => setOpena(true);
  const handleClosea = () => setOpena(false);
  const [opend, setOpend] = React.useState(false);
  const handleOpend = () => setOpend(true);
  const handleClosed = () => setOpend(false);
    return (

        <>
 <div id="address">
        <div class="title">
          <i class="icon" class="fa-light fa-arrow-right"></i>
     
          <h4>آدرس ها</h4>
          <div class="container">
           
            <Button onClick={handleOpen}>
           <div class="popup">
              <i class="fa-light fa-location-dot"></i>
              <a href="#">ثبت آدرس جدید</a>
            </div>
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

        <div class="details">
          <div class="items">
            <div class="add-home">
              <h5>بلوار امام رضا، بن. گلستان ۴۳/۱</h5>

              <div class="popup">
               
                <Button onClick={handleOpena}>
                <i class="fa-solid fa-ellipsis-vertical"></i> 
              </Button>
           

            <Modal
              open={opena}
              onClose={handleClosea}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                
    <div id="delete-address">
      <div class="d1">
        <i class="fa-light fa-pen-line"></i>
        <span>ویرایش آدرس</span>
      </div>
      <div class="d2">
        <i class="fa-light fa-trash-can"></i>
        <span>حذف آدرس</span>
      </div>
    </div>

                </Box></Modal>
              </div>
            </div>
            <div class="add-map">
              <div class="add-details">
                <div class="city">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <p>لاهیجان</p>
                </div>
                <div class="post">
                  <i class="fa-sharp fa-solid fa-envelope"></i>
                  <p>۴۴۱۴۹۹۸۳۶۹</p>
                </div>
                <div class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <p>09394922131</p>
                </div>
                <div class="name">
                  <i class="fa-solid fa-user"></i>
                  <p>امیرحسین جعفری</p>
                </div>
              </div>
              <img     src={process.env.PUBLIC_URL + "/assets/img/map.jpg"} alt="#"/>
            </div>
          </div>
          <div class="items">
            <div class="add-home">
              <h5>بلوار امام رضا، بن. گلستان ۴۳/۱</h5>

              <div class="popup">
              <Button onClick={handleOpena}>
                <i class="fa-solid fa-ellipsis-vertical"></i> 
              </Button>
           

            <Modal
              open={opena}
              onClose={handleClosea}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                
    <div id="delete-address">
      <div class="d1">
        <i class="fa-light fa-pen-line"></i>
        <span>ویرایش آدرس</span>
      </div>
    
      <Button onClick={handleOpend}>
                 <div class="d2">
        <i class="fa-light fa-trash-can"></i>
        <span>حذف آدرس</span>
        
      </div>
              </Button>
              <Modal
              open={opend}
              onClose={handleClosed}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                
    <div id="delete-address2">
      <div class="title">
        <span>حذف آدرس</span>
        <i class="fa-sharp fa-light fa-xmark-large"></i>
      </div>
      <p>آیا از حذف این آدرس از لیست آدرس‌ها اطمینان دارید؟</p>
      <div class="button">
        <a href="#" class="btn2"> انصراف</a>
        <a href="#" class="btn1">حذف آدرس</a>
      </div>
    </div>
              </Box></Modal>
    </div>

                </Box></Modal>
              </div>
            </div>
            <div class="add-map">
              <div class="add-details">
                <div class="city">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <p>لاهیجان</p>
                </div>
                <div class="post">
                  <i class="fa-sharp fa-solid fa-envelope"></i>
                  <p>۴۴۱۴۹۹۸۳۶۹</p>
                </div>
                <div class="phone">
                  <i class="fa-solid fa-phone"></i>
                  <p>09394922131</p>
                </div>
                <div class="name">
                  <i class="fa-solid fa-user"></i>
                  <p>امیرحسین جعفری</p>
                </div>
              </div>
              <img     src={process.env.PUBLIC_URL + "/assets/img/map.jpg"} alt="#"/>
            </div>
          </div>


        </div>





      </div>

        </>

    )

}