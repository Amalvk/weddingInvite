import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Events",
      icon: <ViewDayOutlinedIcon fontSize="small" />,
      scrollTo: "events",
    },
    {
      text: "Invitation",
      icon: <MailOutlinedIcon fontSize="small" />,
      scrollTo: "invitation",
    },
    {
      text: "Wishes",
      icon: <CardGiftcardIcon fontSize="small" />,
      scrollTo: "wishes",
    },
    {
      text: "Location",
      icon: <LocationOnOutlinedIcon fontSize="small" />,
      scrollTo: "location",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">Image</div>
      <div className="navbar-links-container">
        <Link to="invitation" smooth={true}>
          Events
        </Link>
        <Link to="invitation" smooth={true}>
          Invitation
        </Link>
        <Link to="invitation" smooth={true}>
          Wishes
        </Link>
        <Link to="location" smooth={true}>
          Location
        </Link>
      </div>
      <div className="navbar-menu-container" onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            <Box className="sidebarHeadName">
              अमल{" "}
              <FavoriteBorderOutlinedIcon
                sx={{ color: "var( --text-color-primary)" }}
                fontSize="small"
              />
              ऐश्वर्या
            </Box>
            <Divider />

            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <Link
                    to={item.scrollTo}
                    smooth={true}
                    duration={2000}
                    offset={50}
                    spy={true}
                    onClick={() => setOpenMenu(false)}
                  >
                    <Box className="listItem">
                      <ListItemIcon className="listItemIcon">
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        className="listItemText"
                        primary={item.text}
                        sx={{
                          "& .MuiTypography-root": {
                            fontFamily: "var(--font-family-Sofia)",
                          },
                        }}
                      />
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
