import React from "react";
import BackIcon from "../icons/BackIcon";
import Styles from "../styles/OrderList.module.scss";
import TickIcon from "../icons/TickIcon";
import SliderIcon from "../icons/SliderIcon";
import PhoneIcon from "../icons/PhoneIcon";

function TrackOrder() {
  const obj = [
    {
      "image":"/images/png/order.png",
      "text1":"Order Is Taking From Here",
      "icon": <TickIcon/>
    },
    {
      "image":"/images/png/bag.png",
      "text1":"Order Is Being Prepared",
      "icon": <TickIcon/>
    },
    {
      "image":"/images/png/bike.png",
      "text1":"Order Is Being Delivered",
      "text2":"Your delivery agent is coming",
      "icon": <PhoneIcon/>
    }
  ];

  return (
    <>
      <div className={Styles.order4}>
        <div className={Styles.order1}>
          <div>
            <div className={Styles.order2}>
              <div className={Styles.order3}>
                <span>
                  {" "}
                  <BackIcon />
                </span>
              </div>
              <div className={Styles.order5}>
                <span className={Styles.order6 + " inter "}>Go back</span>
              </div>
            </div>
          </div>
          <div className={Styles.order7}>
            <span className={Styles.order8 + " inter "}>Delivery Status</span>
          </div>
        </div>
      </div>

      <div className={Styles.order9}>
        {obj.map((item, index) => {
          return (
            <div className={Styles.order10} key={index}>
              <div className={Styles.order11}>
                <img
                  src={item.image}
                  alt="error"
                  className={Styles.order12}
                />
              </div>
              <div>
                <div>
                  <span className={Styles.order13 + " inter "}>{item.text1}</span>
                </div>
                {item.text2 && (
                  <div>
                    <p className={Styles.order14 + " inter "}>{item.text2}</p>
                  </div>
                )}
              </div>
              <div className={index === 2 ? Styles.trackorder2 : Styles.trackorder1}>
                <span className={Styles.order15 + " inter "}>{item.icon}</span>
              </div>
            </div>
          );
        })}
        {/* map */}
        <div className={Styles.trackorder3}>
            <img src="/images/png/map.png" alt="error" />
        </div>
       
       <div className={Styles.trackorder4}>
        <div className={Styles.trackorder5}>
            <div className={Styles.trackorder1}><span><TickIcon/></span></div>

        </div>
        <div className={Styles.trackorder6}>
            <span>Order Received</span>
        </div>
        <div className={Styles.trackorder6}>
            <span><SliderIcon/></span>

        </div>
       </div>
      </div>
    </>
  );
}

export default TrackOrder;
