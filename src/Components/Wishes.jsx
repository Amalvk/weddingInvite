import React from "react";
import "./Wishes.css";
import { Grid, Avatar } from "@mui/material";

export default function Wishes() {
  let wishes = [
    { name: "Amal", avatar: "A", wish: "good morning" },
    { name: "Karun", avatar: "K", wish: "have a good day" },
    { name: "Navaneeth", avatar: "N", wish: "How are you" },
    { name: "Navaneeth", avatar: "N", wish: "How are you" },
    {
      name: "Navaneeth",
      avatar: "N",
      wish: "How are you How are you How are you How are you How are you How are you How are you How are you How are you ",
    },
  ];

  return (
    <Grid container>
      {wishes.map((item, index) => {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        return (
          <Grid
            spacing={10}
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className={[
              index % 2 == 0 ? "moving-container" : "moving-DownUp",
              "wish-box",
            ]}
          >
            <div className="wish-content">
              <div style={{ display: "flex", gap: ".5rem" }}>
                <Avatar
                  sx={{
                    width: 20,
                    height: 20,
                    fontSize: "small",
                    background: randomColor,
                    alignSelf: "center",
                  }}
                >
                  {item.avatar}
                </Avatar>
                <div className="wisher">{item.name}</div>
              </div>
              <div className=" wish-text">{item.wish}</div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
