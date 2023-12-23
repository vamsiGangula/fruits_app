import React from "react";
import Styles from "../styles/Welcome.module.scss";
import Button from '@mui/material/Button';
function Welcome() {
  return (
    <>
      <div className={Styles.welcome1}>
        <div className={Styles.img1}>
          <img src="/images/png/welcome.png" alt="error" />
          <div className={Styles.welcome2}></div>
        </div>
      </div>
      <div className={Styles.welcome3}>
        <div className={Styles.welcome4}>
        <div>
          <h3 className={Styles.welcomeh + " inter "}>Get The Freshest Fruit Salad Combo</h3>
        </div>
        <div className={Styles.welcome5}>
            <p className={Styles.welcome6 + " inter "} >We deliver the best and freshest fruit salad in town. Order for a combo today!!!</p>
        </div>
        <div className={Styles.welcome7}>
        <Button variant="contained" className=" welcome8 inter ">Let’s Continue</Button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
