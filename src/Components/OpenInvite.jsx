import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./OpenInvite.css";
import CountDown from "./CountDown";
import { FIREBASE_COLLECTIONS } from "../firebase/firebaseCollections";
import { fetchData } from "../firebase/firebaseService";
import CommonSkeleton from "../common/CommonSkeleton";

function OpenInvite(prop) {

  const [details, setDetail] = useState([])

  useEffect(() => {
    fetchData(FIREBASE_COLLECTIONS.WEDDINGINFO).then(setDetail).catch(console.error);
  }, [])

  return (
    <div className="inviteCard">
      <div className="inviteTitle">Invitation Card</div>
      {details.length > 0 ? <div>{details.map((item) => {
        return (<div className="inviteCardSkelton"><div
          className="image"
          onClick={() => {
            prop.openCard(item);
          }}
        >
          <img src="https://fastly.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w" />
          <div className="content">
            <div className="pairName">{item.coupleName}</div>
            <div className="dateText">{item.day}</div>
            <CountDown date={item.date}/>

          </div>
        </div>
          {/* <div className="buttonContainer">
          <Button
            onClick={() => {
              prop.openCard();
            }}
            variant="outlined"
            className="inviteButton"
          >
            Open Invitation
          </Button>
        </div> */}
          
        </div>)
      })}
      </div> : <div className="inviteCardSkelton">
        <CommonSkeleton animation="wave" variant="rounded" width={300} height={200} />
        <CommonSkeleton animation="wave" variant="rounded" width={300} height={200} />
      </div>}
    </div>
  );
}

export default OpenInvite;
