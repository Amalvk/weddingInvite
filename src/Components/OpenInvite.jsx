import React from "react";
import Button from "@mui/material/Button";
import "./OpenInvite.css";
import CountDown from "./CountDown";
function OpenInvite(prop) {
  return (
    <div className="inviteCard">
      <div className="inviteTitle">Invitation Card</div>
      <div
        className="image"
        onClick={() => {
          prop.openCard();
        }}
      >
        <img src="https://fastly.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w" />
        <div className="content">
          <div className="pairName">GN & BN</div>
          <div className="dateText">02/06/2025</div>
        </div>
      </div>
      <div className="buttonContainer">
        <Button
          onClick={() => {
            prop.openCard();
          }}
          variant="outlined"
          className="inviteButton"
        >
          Open Invitation
        </Button>
      </div>
      <div className="countdown">
        <CountDown />
      </div>
    </div>
  );
}

export default OpenInvite;
