import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CrossIcon from "../../icons/CrossIcon";
import { FormControl, FormLabel } from "@mui/material";
import Styles from "../drawer/Bottomdrwaer.module.css";
export default function CardComponent() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function handleSubmit() {}
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "Checkout" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=" boxtest1 "
    >
      <div className={Styles.card7 + " draw1 "}>
        <FormControl onSubmit={() => handleSubmit()}>
          <div className={Styles.draw3}>
            <FormLabel className=" formlabel1 ">Card Holders Name</FormLabel>
          </div>
          <div className={Styles.draw2}>
            {" "}
            <TextField
              placeholder="10th avenue, Lekki, Lagos State"
              className=" btext1 "
            ></TextField>
          </div>
          <div className={Styles.draw6}>
            <FormLabel className=" formlabel1 ">Card Number</FormLabel>
          </div>
          <div className={Styles.draw2}>
            {" "}
            <TextField
              placeholder="10th avenue, Lekki, Lagos State"
              className=" btext1 "
            ></TextField>
          </div>

          <div className={Styles.card1}>
            <div className={Styles.card2}>
            <FormLabel className=" formlabel1 ">Date</FormLabel>
            </div>
            <div className={Styles.card3}>
            <FormLabel className=" formlabel1 ">CCV</FormLabel>
            </div>
          </div>

          <div className={Styles.card4}>
            <div>
            <TextField
              placeholder="10/23"
              className=" textdata "
              
            ></TextField>
            </div>
            <div>
            <TextField
              placeholder="123"
              className=" textdata "
            ></TextField>
            </div>
          </div>
          <div className={Styles.card5}>
            <div className={Styles.card8}>
            <div className={Styles.card6}>
              <Button className=" btntex ">Complete Order</Button>
            </div>
            </div>
          </div>
        
        </FormControl>
      </div>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <CrossIcon onClick={toggleDrawer(anchor, false)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
