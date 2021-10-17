import React from "react";
import { Button, Container, IconButton } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Drawer from "./Drawer";
import Logo from "./Logo";
import IconMenu from "../icon-menu/IconMenu";
import { Box } from "@mui/system";

function Header() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Drawer />
          <Logo />
        </Box>
        <IconMenu />
      </Box>
    </Container>
  );
}

export default Header;
