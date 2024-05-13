
import "swiper/css";
import "swiper/css/navigation";
import { InputNumber, InputGroup, Stack } from 'rsuite';
import { Link } from "react-router-dom";
import { useState } from "react";
export function loader(data) {
  return 0;
}
export default function SingelCard(props) {
    const [value, setValue] = useState(0);
  const handleMinus = () => {
    setValue(parseInt(value, 10) - 1);
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 1);
  };
  return (
    <>
     
     <div className="cart-pro">
            <div className="right-sec">
              <img src={props.image} />
              <div className="count">
                <InputGroup className="count-sec">
                  <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                  <InputNumber className={'custom-input-number'} value={value} onChange={setValue} />
                  <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                </InputGroup>
              </div>
            </div>
            <div className="left-sec">
              <Link className="link-ti" to={"/single-product"}>
                <div className="titel-pro">
                  <h2>شلوار جین زنانه مدل مام فیت</h2>
                  <i class="fa-solid fa-trash-can fa-xl"></i>
                </div>
              </Link>
              <div className="color-pro">
                <div className="col-itself"></div>
                <p>رنگ: آبی</p>
              </div>
              <div className="size-pro">
                <i className="fa-solid fa-arrows-up-down fa-xl "></i>
                <p>سایز: 2XL</p>
              </div>
              <div className="price-pro">
                <h5>450,000 تومان</h5>
                <h4>416,000 تومان</h4>
              </div>
            </div>
          </div>     
                   
                  
     
    </>
  );
}
