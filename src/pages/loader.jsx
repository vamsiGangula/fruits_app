import React, { useEffect } from 'react';
import Styles from '../styles/Home.module.scss';
import { useNavigate } from 'react-router-dom'; 

function Loader() {
  const navigate = useNavigate(); 

  useEffect(() => {
    setTimeout(() => {
      navigate('/welcome'); 
    }, 10000);
  }, [navigate]);

  return (
    <>
      <div className={Styles.home1}>
        <img src="/images/png/home_icon.png" alt="error" />
      </div>
    </>
  );
}

export default Loader;
