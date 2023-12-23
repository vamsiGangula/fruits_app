import React from "react";
import Styles from "../styles/Welcome.module.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Register() {
  return (
    <>
      <div className={Styles.welcome9}> <img src="/images/png/small_icon.png" alt="error" /></div>
      <div className={Styles.welcome1}>
        <div className={Styles.img2}>
           
          <img src="/images/png/authentication.png" alt="error" />
          <div className={Styles.welcome2}></div>
        </div>
      </div>
      <div className={Styles.welcome3}>
        <div className={Styles.welcome4}>
        <div>
          <h3 className={Styles.welcomeh + " inter "}>What is your firstname?</h3>
        </div>
        <div className={Styles.welcome5}>
        <TextField label="Vamsi" variant="filled" className=" text "/>
        </div>
        <div className={Styles.welcome7}>
        <Button variant="contained" className=" welcome8 inter ">Start Ordering</Button>
        </div>
        </div>
      </div>
    </>
  );
}
export default Register;