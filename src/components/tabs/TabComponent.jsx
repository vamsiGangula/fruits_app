import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Styles from "../../styles/Home.module.scss";
import PlusIcon from "../../icons/PlusIcon";
import HeartIcon1 from "../../icons/HeartIcon1";
import SwipeableViews from 'react-swipeable-views';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    {
      img: "/images/png/product2.png",
      description: "Honey lime combo",
      price: "2,000",
    },
    {
        img: "/images/png/product2.png",
        description: "Honey lime combo",
        price: "2,000",
      },
      {
        img: "/images/png/product2.png",
        description: "Honey lime combo",
        price: "2,000",
      },
    // Add other data items as needed
  ];

  return (
    <TabContext value={value}>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Hottest" value={0} />
          <Tab label="Popular" value={1} />
          <Tab label="New combo" value={2} />
          <Tab label="Top" value={3} />
        </Tabs>
        <SwipeableViews index={value} onChangeIndex={handleChange}>
          {[0, 1, 2, 3].map((index) => (
            <TabPanel value={index} key={index}>
              <div className={Styles.itemContainer}>
                {data.map((item, itemIndex) => (
                  <div key={itemIndex} className={Styles.hom9}>
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
            </TabPanel>
          ))}
        </SwipeableViews>
      </Box>
    </TabContext>
  );
}
