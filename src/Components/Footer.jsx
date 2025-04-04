import React from "react";
import "./Footer.css";
import { Box, Divider, Typography } from "@mui/material";
import FooterFlower from '../Assets/FooterFlower.svg'
export default function Footer() {
  return (
    <div className="footerContainer custom-shape-divider">
     {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg> */}
      <div className="footerContent displayBlock ">
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
          <div className="footerName">Team Voyals</div>
          <div className="footerSvg"  />
      </div>
    </div>
  );
}
