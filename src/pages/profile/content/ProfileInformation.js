import { Outlet } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function ProfileInformation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openNum, setOpenNum] = React.useState(false);
  const handleOpenNum = () => setOpenNum(true);
  const handleCloseNum = () => setOpenNum(false);
  const [openGm, setOpenGm] = React.useState(false);
  const handleOpenGm = () => setOpenGm(true);
  const handleCloseGm = () => setOpenGm(false);
  const [openPas, setOpenPas] = React.useState(false);
  const handleOpenPas = () => setOpenPas(true);
  const handleClosePas = () => setOpenPas(false);
  const [openB, setOpenB] = React.useState(false);
  const handleOpenB = () => setOpenB(true);
  const handleCloseB = () => setOpenB(false);
  const [openJ, setOpenJ] = React.useState(false);
  const handleOpenJ = () => setOpenJ(true);
  const handleCloseJ = () => setOpenJ(false);
  const [openRes, setOpenRes] = React.useState(false);
  const handleOpenRes = () => setOpenRes(true);
  const handleCloseRes = () => setOpenRes(false);
  const [openR, setOpenR] = React.useState(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);

  return (
    <>
      <div className="information">
        <div className="user-information">
          <h4>اطلاعات حساب کاربری</h4>
        </div>

        <div className="top">
          <div className="text">
            <i className="fa-sharp fa-light fa-circle-info"></i>
            <h5>
              برای افزایش امنیت حساب کاربری خود و جلوگیری از سوءاستفاده، لطفا
              هویت خود را تایید کنید
            </h5>
          </div>
       
        </div>

        <div className="bottom">
          <div className="name">
            <div className="name1">
              <p>نام ونام خانوادگی</p>
              <input type="text" value="امیرحسین جعفری" readonly />
            </div>

            <div className="container" class="pen">
            
            </div>

           
          </div>
          <div className="code-meli">
            <div className="name1">
              <p>کدملی/گذرنامه/شماره اقامت</p>
              <input type="text" value="2710363666" readonly />
            </div>
            <div className="container" class="pen">
              {/* <div className="popup">
                <i className="fa-sharp fa-light fa-plus"></i>
              </div> */}
            </div>
          </div>
          <div className="phone">
            <div className="name1">
              <p>شماره موبایل</p>
              <input type="text" value="09394922131" readonly />
            </div>
            <div className="container" classNameName="pen">
              <Button onClick={handleOpenNum}>
                {" "}
                <div className="popup">
                  <i className="fa-light fa-pen-line"></i>
                </div>
              </Button>
            </div>
            <Modal
              open={openNum}
              onClose={handleCloseNum}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div id="editNumber">
                  <div class="title">
                    <span>ویرایش شماره موبایل</span>
                    <i class="fa-sharp fa-light fa-xmark-large"></i>
                  </div>
                  <div class="inpt">
                    <input type="text" />
                  </div>
                  <div class="time-limit">
                    <p>برای ثبت این شماره باید آن را تایید کنید.</p>
                  </div>

                  <div class="btn">
                    <a href="#">دریافت کد تایید و تغییر شماره</a>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="email">
            <div className="name1">
              <p>ایمیل</p>
              <input type="text" value="amir.djnfj@gmail.com" readonly />
            </div>
            <div className="container" class="pen">
              <Button onClick={handleOpenGm}>
                {" "}
                <div className="popup">
                  <i className="fa-sharp fa-light fa-plus"></i>
                </div>
              </Button>
            </div>
            <Modal
              open={openGm}
              onClose={handleCloseGm}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div id="gmail">
                  <div class="title">
                    <span>اضافه کردن جیمیل</span>
                    <i class="fa-sharp fa-light fa-xmark-large"></i>
                  </div>

                  <input type="text" />

                  <div class="btn">
                    <a class="btn1" href="#">
                      ثبت
                    </a>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="password">
            <div className="name1">
              <p>رمز عبور</p>
              <input type="text" value="ali1234" readonly />
            </div>
            <div className="container" class="pen">
              {" "}
              <Button onClick={handleOpenPas}>
                {" "}
                <div className="popup">
                  <i className="fa-sharp fa-light fa-plus"></i>
                </div>
              </Button>
            </div>
          </div>
          <Modal
            open={openPas}
            onClose={handleClosePas}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div id="edit-password">
                <div class="title">
                  <span>تغییر رمز عبور</span>
                  <i class="fa-sharp fa-light fa-xmark-large"></i>
                </div>

                <div class="sec1">
                  <span>رمز عبور فعلی</span>
                  <input type="password" value="6584dfkhiygyu" required />
                  <span>لطفا این قسمت را خالی نگذارید</span>
                  <a href="#">
                    <span>بازیابی رمز عبور</span>
                    <i class="fa-light fa-angle-left"></i>
                  </a>
                </div>

                <div class="sec2">
                  <span>رمز عبور شما باید حداقل ۸ حرف باشد.</span>
                  <span>رمز عبور جدید</span>
                  <input type="password" value="6584dfkhiygyu" required />
                  <div class="line">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div class="necessary">
                  <ul>
                    <li>حداقل ۸ حرف</li>
                    <li>شامل عدد</li>
                    <li>شامل علامت (!@#$%&*^)</li>
                    <li>شامل یک حرف بزرگ و کوچک</li>
                  </ul>
                </div>

                <div class="code">
                  <span>تکرار رمز عبور جدید</span>
                  <input type="password" value="6584dfkhiygyu" required />
                </div>

                <div class="btn">
                  <a class="btn1" href="#">
                    ثبت
                  </a>
                </div>
              </div>
            </Box>
          </Modal>

          <div className="birth">
            <div className="name1">
              <p>تاریخ تولد</p>
              <input type="text" value="26/8/1400" readonly />
            </div>
            <div className="container" class="pen">
              <Button onClick={handleOpenB}>
                {" "}
                <div className="popup">
                  <i className="fa-sharp fa-light fa-plus"></i>
                </div>
              </Button>
              <Modal
                open={openB}
                onClose={handleCloseB}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div id="birthday">
                    <div class="title">
                      <span>تاریخ تولد</span>
                      <i class="fa-sharp fa-light fa-xmark-large"></i>
                    </div>

                    <div class="date">
                      <div class="year">
                        <span>سال</span>
                        <select class="slt">
                          <option>۱۳۷۵</option>
                          <option>۱۳۷۶</option>
                          <option>۱۳۷۷</option>
                          <option>۱۳۷۸</option>
                          <option>۱۳۷۹</option>
                          <option>۱۳۸۰</option>
                        </select>
                      </div>
                      <div class="month">
                        <span>ماه</span>
                        <select class="slt">
                          <option>فروردین</option>
                          <option>اردیبهشت</option>
                          <option>خرداد</option>
                          <option>تیر</option>
                          <option>مرداد</option>
                          <option>شهریور</option>
                          <option>مهر</option>
                          <option>آبان</option>
                          <option>آذر</option>
                          <option>دی</option>
                          <option>بهمن</option>
                          <option>اسفند</option>
                        </select>
                      </div>
                      <div class="day">
                        <span>روز</span>
                        <select class="slt">
                          <option>۱</option>
                          <option>۲</option>
                          <option>۳</option>
                          <option>۴</option>
                          <option>۵</option>
                          <option>۶</option>
                          <option>۷</option>
                          <option>۸</option>
                          <option>۹</option>
                        </select>
                      </div>
                    </div>
                    <div class="btn">
                      <a class="btn1" href="#">
                        بررسی اطلاعات
                      </a>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="job">
            <div className="name1">
              <p>شغل</p>
              <input type="text" value="دانش آموز" readonly />
            </div>
            <div className="container" class="pen">
              <Button onClick={handleOpenJ}>
                {" "}
                <div className="popup">
                  <i className="fa-sharp fa-light fa-plus"></i>
                </div>
              </Button>
            </div>
            <Modal
              open={openJ}
              onClose={handleCloseJ}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div id="choose-job">
                  <div class="title">
                    <span>شغل خود را انتخاب کنید</span>
                    <i class="fa-sharp fa-light fa-xmark-large"></i>
                  </div>
                  <select>
                    <option value="" disabled selected></option>
                    <option value="">ورزشکار</option>
                    <option value="">مهندس</option>
                    <option value="">کناف کار</option>
                    <option value="">مغازه دار</option>
                    <option value="">راننده</option>
                  </select>

                  <div class="btn">
                    <a class="btn1" href="#">
                      ثبت اطلاعات
                    </a>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
          <div className="return-money">
            <div className="name1">
              <p>روش بازگرداندن پول</p>
              <input type="text" value="26511355468323485" readonly />
            </div>
            <div className="container" class="pen">
              <Button onClick={handleOpenRes}>
                {" "}
                <div className="popup">
                  <i className="fa-sharp fa-light fa-plus"></i>
                </div>
              </Button>
              <Modal
                open={openRes}
                onClose={handleCloseRes}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div id="active-restoration-step1">
                    <div class="title">
                      <span>اطلاعات بازگرداندن وجه مرجوعی</span>
                      <i class="fa-sharp fa-light fa-xmark-large"></i>
                    </div>

                    <div class="code">
                      <span>
                        برای محاسبه شبا، شماره کارت متصل به حسابی که می‌خواهید
                        واریز وجه به آن انجام شود را وارد کنید.
                      </span>
                    </div>

                    <a class="send" href="#">
                      <span>ملاحظات بازگشت وجه توسط دیجی کالا</span>
                      <i class="fa-light fa-angle-left"></i>
                    </a>

                    <div class="d1">
                      <input type="radio" name="return" />
                      <div class="details">
                        <span>واریز به کیف پول دیجی‌پی</span>
                        <p>
                          شما می‌توانید با انتخاب کیف پول به عنوان روش بازگشت
                          وجه، از مزایای انتقال سریع تر وجوه درخواستی بهره‌مند
                          شوید.
                        </p>
                      </div>
                    </div>
                    <div class="wallet">
                      <a href="#" class="send">
                        <span>فعالسازی و انتخاب</span>
                        <i class="fa-light fa-angle-left"></i>
                      </a>
                      <img
                  
                        src={require("../../../assets/img/profile-wallet1.svg")}
                        alt="wallet"
                      />
                    </div>
                    <div class="d2">
                      <input type="radio" name="return" />
                      <div class="details">
                        <span>واریز به حساب بانکی</span>
                        <p>
                          در این روش، دیجی‌کالا به شماره شبا حساب بانکی شما نیاز
                          دارد. در صورتی که شماره شبا خود را نمیدانید شما
                          می‌توانید در مرحله بعد با شماره حساب و یا شماره کارت
                          بانکی خود نسبت به محاسبه شبا اقدام نمایید.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="edit">
                      <a href="#" class="send">
                       
                        <Button onClick={handleOpenR}>
               <span>ویرایش شماره شبا</span>
              </Button>
              <Modal
              open={openR}
              onClose={handleCloseR}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
              <div id="restoration">
      <div class="title">
        <span>اطلاعات بازگرداندن وجه مرجوعی</span>
        <i class="fa-sharp fa-light fa-xmark-large"></i>
      </div>


      <div class="code">
        <span>برای محاسبه شبا، شماره کارت متصل به حسابی که می‌خواهید واریز وجه به آن انجام شود را وارد کنید.</span>
        <input type="text" required/>

      </div>

      <div class="btn">
        <a class="btn1" href="#">محاسبه شماره شبا</a>
      </div>

    </div>
              </Box>
            </Modal>
                        <i class="fa-light fa-angle-left"></i>
                      </a>
                    </div>
                    <div class="button">
                      <a href="#" class="btn2">
                        {" "}
                        انصراف
                      </a>
                      <a href="#" class="btn1">
                        ادامه
                      </a>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
