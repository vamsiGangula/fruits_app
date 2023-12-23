import React from 'react'
import BackIcon from "../icons/BackIcon";
import PlusIcon from "../icons/PlusIcon";
import HeartIcon from "../icons/HeartIcon";
import Button from '@mui/material/Button';
import MinusIcon from "../icons/MinusIcon";
import Styles from "../styles/Cart.module.scss";
function Cart ()  {
  return (
    <>
      <div className={Styles.cart1}>
        <div className={Styles.cart2}>
          <div className={Styles.cart3}>
            <div className={Styles.cart10}>
              <BackIcon className=" spanback " />
            </div>
            <div className={Styles.cart5}>Go back</div>
          </div>
          <div className={Styles.cart6}>
            <img src="/images/png/product.png" alt="error" />
          </div>
        </div>
        <div className={Styles.cart7}>
          <div className={Styles.cart8}>
            <span className={Styles.cart9 + " inter "}>Quinoa Fruit Salad</span>
          </div>

          <div className={Styles.cart11}>
            <div className={Styles.icon1}>
              <span><MinusIcon /></span>
            </div>
            <div className={Styles.icon2}>
              <span className={Styles.icon4 + " inter "}> 1 </span>
            </div>
            <div className={Styles.icon3}>
            <span><PlusIcon /></span>
            </div>
            <div>
              <span className={Styles.icon5 + " inter "}>2000</span>
            </div>
          </div>

          <div className={Styles.cart12}>

          </div>
          <div className={Styles.cart13}>
            <p className={Styles.cart14 + " inter "}>One Pack Contains:</p>
            <div className={Styles.cart15}></div>
          </div>
          <div className ={Styles.cart16}>
            <p className ={Styles.cart17 + " inter "}>Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</p>
          </div>

          <div className ={Styles.cart18}>
            <p className ={Styles.cart19 + " inter "}>
            If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
            </p>
          </div>

          <div className={Styles.cart20 + " cart20 "}> 
            <div>
              <span className={Styles.cart21}>
                <HeartIcon/>
              </span>
            </div>
            <div className={Styles.cart22}>
              <Button>Add to basket</Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cart