import React from "react";
import BasketIcon from "../icons/BasketIcon";
import ShuffleIcon from "../icons/ShuffleIcon";
import SearchIcon from "../icons/SearchIcon";
import FilterIcon from "../icons/FilterIcon";
import PlusIcon from "../icons/PlusIcon";

import HeartIcon1 from "../icons/HeartIcon1";
import Styles from "../styles/Home.module.scss";
import TextField from "@mui/material/TextField";
import TabComponent from "../components/tabs/TabComponent";

function Homepage() {
  const data = [
    {
      img: "/images/png/product2.png",
      description: "Honey lime combo",
      price: "2,000",
    },
    {
      img: "/images/png/product1.png",
      description: "Berry mango combo",
      price: "8,000",
    },
  
  ];
  return (
    <>
      <div className={Styles.homsec}>
        <div className={Styles.hom1}>
          <div className={Styles.hom2}>
            <span>
              <FilterIcon />
            </span>
          </div>
          <div className={Styles.hom3}>
            <span>
              <BasketIcon />
            </span>
            <div className={Styles.hom4 + " inter "}>My basket</div>
          </div>
        </div>

        <div className={Styles.hom5}>
          <span className={Styles.homspan5 + " inter "}>Hello Tony, </span>
          <span className={Styles.homspan6 + " inter "}>
            What fruit salad combo do you want today?
          </span>
        </div>

        <div className={Styles.hom7}>
          <div className={Styles.hom8}>
            <TextField placeholder="Search for fruit salad combos"></TextField>
            <div className={Styles.serachIcon}>
              {" "}
              <SearchIcon />
            </div>
          </div>
          <div className={Styles.shuffle}>
            <span>
              <ShuffleIcon />
            </span>
          </div>
        </div>

        <div style={{ "padding-top": "20px" }}>
          <p className={Styles.recomned + " inter "}>Recommended Combo</p>
        </div>

        <div className={Styles.itemContainer}>
          {data.map((item, index) => (
            <div key={index} className={Styles.hom9}>
              <div className={Styles.hom10}>
                <span>
                  <HeartIcon1 />
                </span>
              </div>
              <div className={Styles.hom11}>
                <img src={item.img} alt="error" />
              </div>
              <div className={Styles.hom12}>
                <span className={Styles.hom13 + " inter "}>
                  {item.description}
                </span>
              </div>
              <div className={Styles.hom14}>
                <div>
                  <span className={Styles.hom15 + " inter "}>{item.price}</span>
                </div>
                <div>
                  <span>
                    <PlusIcon />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* tabs */}
       <div className={Styles.hom16}>
       <TabComponent/>
       </div>
      </div>
    </>
  );
}

export default Homepage;
