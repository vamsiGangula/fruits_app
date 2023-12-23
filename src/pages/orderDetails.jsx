import React from "react";
import BigTick from "../icons/BigTick";
import Button from '@mui/material/Button';
import Styles from "../styles/OrderDetails.module.scss";
function OrderDetails() {
  return (
    <>
      <div className={Styles.od1}>
        <div className={Styles.od2}>
        <div className={Styles.od3}>
         <div className={Styles.od4}>
         <div className={Styles.od5}>
            <span className={Styles.od6}>
              <BigTick />
            </span>
          </div>
         </div>
        </div>
        </div>


        <div className={Styles.od8}>
            <span className={Styles.od9 + " inter "}>Congratulations!!!</span>
        </div>
        <div className={Styles.od10}>
        <span className={Styles.od11 + " inter "}>Your order have been taken and is being attended to</span>
        </div>
        <div className={Styles.od12}>
            <span className={Styles.od13}><Button className=" trackbut inter ">Track order</Button></span>

        </div>
        <div className={Styles.od14}>
        <span className={Styles.od15} ><Button className=" trackbut2 inter ">Continue shopping</Button></span>
        </div>
            
      </div>
    </>
  );
}

export default OrderDetails;
