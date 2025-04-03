import "./Location.css";
import React, { useEffect, useState } from "react";
import { Button, Typography, Divider } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import { FIREBASE_COLLECTIONS } from "../firebase/firebaseCollections";
import { fetchData } from "../firebase/firebaseService";

export default function RedirectMap() {
  const [location, setLocation] = useState([])

  useEffect(() => {
    fetchData(FIREBASE_COLLECTIONS.EVENT).then(setLocation).catch(console.error);
  }, [])
  const handleRedirect = (location) => {
    window.open(location, "_blank"); // Opens in a new tab
  };

  return (
    <div className='locationContainer'>
      <div className="justifyCenter locationHeadName">Location Details <LocationOnIcon sx={{ fontSize: "medium" }} />{" "}</div>

      {location.map((event, index) => {
        return (
          <div key={index} className={index % 2 === 0 ? "moving-container locationCard" : "moving-DownUp locationCard"}>
            <div className="eventLocationText">
              {event.program} 
              </div>
              <div className="eventLocationDay">{event.day}</div>
            <div className="dotted-line"></div>
            <div className="addressText">
              <div>{event.location.line1}</div>
              <div>{event.location.line2 && event.location.line2}</div>
              <div>{event.location.line3 && event.location.line3}</div>
            </div>

            <div>
              <Button
                onClick={() => {
                  handleRedirect(event.link);
                }}
                variant="outlined"
                className={"navigateButton"}
              >
                Get direction <MovingOutlinedIcon sx={{ fontSize: "medium" }} />{" "}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
