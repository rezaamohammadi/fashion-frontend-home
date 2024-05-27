import { Link, Outlet } from "react-router-dom"
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
  
export default function Profile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openp, setOpenp] = React.useState(false);
    const handleOpenp = () => setOpenp(true);
    const handleClosep = () => setOpenp(false);
    return (

        <>

            <div id="profile-information">
                <div id="profile-menu">
                    <div className="profile">

                        <div className="p">
                          <label className="p1">
                          <Button onClick={handleOpenp}>

              </Button>
              <Modal
              open={openp}
              onClose={handleClosep}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <div id="change-pfp">
        <div class="container">
            <img src={process.env.PUBLIC_URL + "/assets/img/OIP.jpeg"} alt=""/>
            <div class="buttons">
                <a href="#">حذف </a>
                <a href="#">اضافه</a>
            </div>
        </div>
    </div>
              </Box>
            </Modal>
                          </label>
                            
                            <span>09394922131</span>
                        </div>
                        <Button onClick={handleOpen}>
                        <a href="#" className="pen"><i className="fa-light fa-pen-line"></i></a>
              </Button>
           

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div id="changeName-modal">
                  <div class="title">
                    <span>ثبت اطلاعات شناسایی</span>
                    <i onClick={handleClose} class="fa-sharp fa-light fa-xmark-large"></i>
                  </div>
                  <p>
                    لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی
                    شما باید با اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.
                  </p>

                  <div class="details">
                    <div class="name">
                      <span>نام*</span>
                      <input type="text" />
                    </div>
                    <div class="family">
                      <span>نام خانوادگی*</span>
                      <input type="text" />
                    </div>
                    <div class="foreigner">
                      <input type="checkbox" />
                      <span>اتباع خارجی هستم و کد ملی ندارم</span>
                    </div>
                    <div class="code-meli">
                      <span>کدملی*</span>
                      <input type="text" />
                    </div>

                    <div class="btn">
                      <a class="button" href="#">
                        بررسی اطلاعات
                      </a>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
               
                        
                    </div>
                    <div className="menu">
                        <a className="personal-imformation" href="#">
                            <i className="fa-light fa-pen"></i>
                            <Link to={"/profile/profile-information"}> اطلاعات حساب کاربری  </Link>
                        </a>

                        <a href="#" className="Orders">
                            <i className="fa-sharp fa-light fa-bag-shopping"></i>
                            <Link to={"/profile/order-history"}>  سفارش ها   </Link>
                            
                        </a>

                        <a href="#" className="My-favorite">
                            <i className="fa-light fa-heart"></i>
                            <Link to={"/profile/favourite"}>علاقه مندی های من </Link>
                    
                        </a>
                        <a href="#" className="Opinions">
                            <i className="fa-sharp fa-light fa-message"></i>
                            <Link to={"/profile/opnions"}>  دیدگاه ها   </Link>
                     
                        </a>
                        <a href="#" className="Addresses">
                            <i className="fa-light fa-map"></i>
                            <Link to={"/profile/addresses"}> آدرس ها  </Link>
                        
                        </a>
                        <a href="#" className="gift">
                            <i className="fa-sharp fa-light fa-gift"></i>
                            <Link to={"/profile/code-off"}> کارت های هدیه </Link>
                  
                        </a>
                        <a href="#" className="messages">
                            <i className="fa-sharp fa-light fa-bell"></i>
                            <Link to={"/profile/massages"}> پیغام ها  </Link>
                            
                        </a>
                     
                        <a href="#" className="exit">
                            <i className="fa-sharp fa-light fa-xmark-large"></i>
                            <Link to={"/email-number"}> خروج </Link>
                       
                        </a>
                    </div>
                </div>



<Outlet/>
            </div>

        </>

    )

}