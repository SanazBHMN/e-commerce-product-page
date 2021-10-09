import React, { useState } from "react";
import {
  IconButton,
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    width: 250,
  },
});

function Drawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuRoundedIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={isOpen}
        onOpen={() => {}}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div className={classes.item}>
          <Box>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {/* <Divider /> */}
          <List>
            {["Collections", "Men", "Women", "About", "Contact"].map(
              (text, index) => (
                <ListItem button key={text}>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text}></ListItemText>
                </ListItem>
              )
            )}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Drawer;
