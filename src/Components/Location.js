import "./Location.css";
import React from "react";
import { Button, Typography, Divider } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";

export default function RedirectMap() {
  // const address = {
  //   AddressLine1: "Sargalaya Arts & Craft village",
  //   AddressLine2: "Oilmill-Kottakkal Road",
  //   AddressLine3: "Vatakara",
  // };
  const eventDetails = [
    {
      type: "Wedding",
      AddressLine1: "Sargalaya Arts & Craft village",
      AddressLine2: "Oilmill-Kottakkal Road",
      AddressLine3: "Vatakara",
      location: `https://maps.app.goo.gl/3Z7kbrGVz26TXXVG8`,
    },
    {
      type: "Reception",
      AddressLine1: "Sargalaya Arts & Craft village",
      AddressLine2: "Oilmill-Kottakkal Road",
      AddressLine3: "Vatakara",
      location: `https://maps.app.goo.gl/3Z7kbrGVz26TXXVG8`,
    },
  ];
  const handleRedirect = (location) => {
    const souparnika = `https://maps.app.goo.gl/kZX7ATcatcoP9dnG6`;
    const url = `https://maps.app.goo.gl/3Z7kbrGVz26TXXVG8`;

    window.open(url, "_blank"); // Opens in a new tab
  };

  return (
    <div className='locationContainer'>
      <div className="justifyCenter ">Location Details</div>

      {eventDetails.map((place, index) => {
        return (
          <div className="locationCard">
            <div className="eventLocationText">
              {place.type} <LocationOnIcon sx={{ fontSize: "medium" }} />{" "}
            </div>
            <div className="dotted-line"></div>
            <div className="addressText">
              <div>{place.AddressLine1}</div>
              <div>{place.AddressLine2}</div>
              <div>{place.AddressLine3}</div>
            </div>

            <div>
              <Button
                onClick={() => {
                  handleRedirect(place.location);
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
