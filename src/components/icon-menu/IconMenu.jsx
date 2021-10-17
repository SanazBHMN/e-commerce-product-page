import React from "react";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import { makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  image: {
    marginRight: "1rem",
  },
});

function IconMenu() {
  const classes = useStyles();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <img src={cart} className={classes.image} />
      <Avatar src={avatar} />
    </Box>
  );
}

export default IconMenu;
