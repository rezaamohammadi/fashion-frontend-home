import { Outlet } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddressCard from "../../../components/cards/AddressCard";
export function loader(data) {
  return 0;
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
          <i class="icon" className="fa-light fa-arrow-right"></i>

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
                      <input
                        type="text"
                        placeholder="خ. ولیعصر، بعد از م. ونک، خ. شریفی"
                      />
                      <span class="t1">
                        آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است.
                      </span>
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
                          <input type="text" />
                        </div>
                        <div class="floor">
                          <span>واحد </span>
                          <input type="text" />
                        </div>
                        <div class="code-posti">
                          <span>کدپستی* </span>
                          <input type="text" />
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
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </>
  );
}
