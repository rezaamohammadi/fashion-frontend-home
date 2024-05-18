import "swiper/css";
import "swiper/css/navigation";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
};
export default function AddressCard(props) {
  const [opena, setOpena] = React.useState(false);
  const handleOpena = () => setOpena(true);
  const handleClosea = () => setOpena(false);
  return (
    <>
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
              </Box>
            </Modal>
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
          <img src={process.env.PUBLIC_URL + "/assets/img/map.jpg"} alt="#" />
        </div>
      </div>
    </>
  );
}
