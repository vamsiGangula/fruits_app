import React from "react";
import BackIcon from "../icons/BackIcon";
import Styles from "../styles/OrderList.module.scss";
import Button from "@mui/material/Button";
// import { useRouter } from "next/navigation";
import BottomDrawer from "../components/drawer/BottomDrawer";
import CardComponent from "../components/drawer/CardComponent";
function OrdersList() {
  const [drawer, setDrawer] = React.useState(false);
  // const router = useRouter();
  const obj = [
    {
      image: "/images/png/breakfast.png",
      text1: "Quinoa fruit salad",
      text2: "2packs",
      price: "20,000",
    },
    {
      image: "/images/png/breakfast.png",
      text1: "Quinoa fruit salad",
      text2: "2packs",
      price: "20,000",
    },
    {
      image: "/images/png/breakfast.png",
      text1: "Quinoa fruit salad",
      text2: "2packs",
      price: "20,000",
    },
  ];
  function checkout() {
    setDrawer(!drawer);
  }
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
            <span className={Styles.order8 + " inter "}>My Basket</span>
          </div>
        </div>
      </div>

      <div className={Styles.order9}>
        {obj.map((item, index) => {
          return (
            <div className={Styles.order10} key={index}>
              <div className={Styles.order11}>
                <img src={item.image} alt="error" className={Styles.order12} />
              </div>
              <div>
                <div>
                  <span className={Styles.order13 + " inter "}>
                    {item.text1}
                  </span>
                </div>
                <div>
                  <p className={Styles.order14 + " inter "}>{item.text2}</p>
                </div>
              </div>
              <div>
                <span className={Styles.order15 + " inter "}>{item.price}</span>
              </div>
            </div>
          );
        })}
        <div className={Styles.order16}>
          <div className={Styles.order17}>
            <div>
              <span className={Styles.order19 + " inter "}>Total</span>
            </div>
            <div>
              <span className={Styles.order20 + " inter "}>60,000</span>
            </div>
          </div>
          <div className={`${Styles.order18} customButtonStyle`}>
            {drawer ? (
              <CardComponent />
            ) : (
              <Button
                className=" inter "
                onClick={() => {
                  checkout();
                }}
              >
                Checkout
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersList;
