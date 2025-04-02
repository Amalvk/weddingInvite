import "./Invitation.css";
import { Grid, Divider, div, Typography } from "@mui/material";
import Ghibili from '../Assets/ghibiliAA.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";

export default function Invitation({ bride, groom, dateInfo, description }) {


  useEffect(() => {
    AOS.init({
      duration: 3000,
      // once: false,
    });
    AOS.refresh();  // Refresh AOS animations
  }, []);


  return (
    <Fade bottom duration={2000}>
      <div data-aos="zoom-out-right" className="invitation-component">
        <Grid container className="invitation-card">
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="invite-head">
            <div className="invite-head-image">
              <img className="invite-couple-image" src ={Ghibili} alt="img" />
            </div>
            <div className="justifyCenter">
              <div>{groom.name}</div>
              <div>{bride.name}</div>
            </div>
            <div>
              <Divider variant="middle">
                <div>{dateInfo.week}</div>
              </Divider>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    maxWidth: "6rem",
                    margin: "auto",
                  }}
                >
                  {" "}
                  <div>{dateInfo.month} </div>
                  <div> {dateInfo.day} </div> <div> {dateInfo.year} </div>{" "}
                </div>
                <Divider variant="middle"></Divider>
                <div>
                  <div className="timeDescription justifyCenter">{description} </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="invite-body">
            <div className="justifyCenter">
              വിവാഹ ക്ഷണപത്രം</div>
            <div className="family-details-head">
              <div className="family-details-groom">
                <div>വരൻ</div>
                <div>{groom.name}</div>
                <div>S/o {groom.fatherName}</div>
                <div>{groom.address}</div>
              </div>
              <div className="family-details-bride">
                <div>വധു</div>
                <div>{bride.name}</div>
                <div>D/o {bride.fatherName}</div>
                <div>{bride.address}</div>
              </div>
            </div>
            <div className="displayBlock">
              <div>Described date</div>
              <div>Location</div>
              <div>W content</div>
              <div>Tail</div>
              <Divider variant="middle" />
              <div>Footer</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}
