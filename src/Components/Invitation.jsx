import "./Invitation.css";
import { Grid, Divider, div, Typography } from "@mui/material";
import Ghibili from '../Assets/ghibiliAA.jpg';
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

export default function Invitation({
  bride,
  groom,
  dateInfo,
  description,
  calenderDate,
  malayalaMasam,
  muhurtham,
  venue,
  inviteText,
  lovingly
}) {

  return (
    <Fade left duration={1000}>
      <div className="invitation-component">
        <Grid container className="invitation-card">
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="invite-head">
            <div className="invite-head-image">
              <img className="invite-couple-image" src={Ghibili} alt="img" />
            </div>
            <div className="inviteEssential">
              <div className=" invite-couple-name text-small" >
                <div className='invite-head-groom' >{groom.name}</div>
                <div className="invite-head-bride">{bride.name} </div>
            </div>
              <div className="invite-date-description">
                <Divider variant="middle">
                  <div className="rachana-font">{dateInfo.week}</div>
                </Divider>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      maxWidth: "5rem",
                      margin: "auto",
                      alignItems: 'center'
                    }}
                  >
                    {" "}
                    <div className="rachana-font">{dateInfo.month} </div>
                    <div className="rachana-font text-medium "> {dateInfo.day} </div> <div className="rachana-font"> {dateInfo.year} </div>{" "}
                  </div>
                  <Divider variant="middle"></Divider>
                  <div className="justifyCenter timeDescription rachana-font">{muhurtham}</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} className="invite-body ">
            <div className="justifyCenter nupuram-font" style={{ fontWeight: 600, color: 'var(--color-warm)' }} >
              വിവാഹ ക്ഷണപത്രം</div>
            <div className="underLineSvg" > </div>
            <div className="family-details-head">
              <div className="family-details-groom">
                <div className="rachana-font ">വരൻ :</div>
                <div className="rachana-font text-medium invite-couple-text">{groom.name}</div>
                <div className="rachana-font ">S/o {groom.fatherName}</div>
                <div className="rachana-font">{groom.address}</div>
              </div>
              <div className="family-details-bride" >
                <div className="rachana-font ">: വധു</div>
                <div className="rachana-font text-medium invite-couple-text">{bride.name}</div>
                <div className="rachana-font">D/o {bride.fatherName}</div>
                <div className="rachana-font">{bride.address}</div>
              </div>
            </div>
            <div >
              <div className="dyuthi-font">വിവാഹ സുദിനം : </div>
              <div className="rachana-font">{calenderDate}</div>
              <div className="rachana-font">({malayalaMasam})</div>
            </div>
            {/* <div >
              <div className="dyuthi-font">മുഹൂര്‍ത്തം : </div>
              <div className="rachana-font">{muhurtham}</div>
            </div> */}
            <div>

              <div className="dyuthi-font">വിവാഹവേദി : </div>
              <div className="rachana-font">{venue}</div>
            </div>
            <div className="invite-text-note">{inviteText}</div>
            <div className="dyuthi-font">എന്ന്,</div>
            <div className="rachana-font text-large ">{groom.fatherName}</div>
            <Divider variant="middle" />
            <div className="rachana-font">സ്നേഹപൂർവ്വം : {lovingly}</div>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}
