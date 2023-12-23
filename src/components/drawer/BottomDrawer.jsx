import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import CrossIcon from "../../icons/CrossIcon";
import { FormControl, FormLabel } from "@mui/material";
import Styles from "../drawer/Bottomdrwaer.module.css";
import CardComponent from "./CardComponent";
export default function BottomDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });
const [card ,setCard] = React.useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function cardOpen(){
    setCard(true);
  }
  function handleSubmit() {}
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "Checkout" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=" boxtest1 "
    >
      <div className={Styles.draw1 + " draw1 "}>
        <FormControl onSubmit={() => handleSubmit()}>
          <div className={Styles.draw3}>
            <FormLabel className=" formlabel1 ">Delivery address</FormLabel>
          </div>
          <div className={Styles.draw2}>
            {" "}
            <TextField
              placeholder="10th avenue, Lekki, Lagos State"
              className=" btext1 "
            ></TextField>
          </div>
          <div className={Styles.draw6}>
            <FormLabel className=" formlabel1 ">Delivery address</FormLabel>
          </div>
          <div className={Styles.draw2}>
            {" "}
            <TextField
              placeholder="10th avenue, Lekki, Lagos State"
              className=" btext1 "
            ></TextField>
          </div>
          <div className={Styles.draw4}>
            <div className={Styles.draw5}>
              <Button className="btntex">Pay on delivery</Button>
            </div>
            <div className={Styles.draw5}>
              { card ? <CardComponent/> :<Button className="btntex" onClick={cardOpen}>Pay with card</Button>}
              
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
