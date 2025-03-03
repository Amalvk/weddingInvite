import React from "react";
import "./Footer.css";
import { Box, Divider, Typography } from "@mui/material";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContent displayBlock">
        {" "}
        <div className="thankYou">Thank You</div>
        <div className="footerDescription">
          For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider className="footerDivider" />

          <div className="footerName">Amal | Akshay | Madhanan | Shyni</div>

          <Divider className="footerDivider" />
        </Box>
        <div className="footerName"> Voyals</div>
      </div>
    </div>
  );
}
