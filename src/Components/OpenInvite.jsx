import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./OpenInvite.css";
import CountDown from "./CountDown";
import { FIREBASE_COLLECTIONS } from "../firebase/firebaseCollections";
import { fetchData } from "../firebase/firebaseService";
import CommonSkeleton from "../common/CommonSkeleton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Zoom } from 'react-awesome-reveal';
import images from "../Assets/images"; // Import images

function OpenInvite(prop) {

  const [details, setDetail] = useState([])

  useEffect(() => {
    fetchData(FIREBASE_COLLECTIONS.WEDDINGINFO).then(setDetail).catch(console.error);
  }, [])

  return (
    <div className="inviteCard">
      <div className="inviteTitle borderLine">Invitation Card</div>
      {details.length > 0 ? <div>{details.map((item,index) => {
        return (<Zoom><div className="inviteCardSkelton"><div
          className="image"
          onClick={() => {
            prop.openCard(item);
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <img src={images.couples[index].image} />
          <div className="content">
            <div className="pairName">{item.groom.nameEng}
              <FavoriteBorderOutlinedIcon
                sx={{ color: "var( --text-color-primary)" }}
                fontSize="small"
              />
              {item.bride.nameEng}
            </div>
            <div className="dateText">{item.day}</div>
            <Zoom duration={1500} >
              <CountDown date={item.date} openInvite />
            </Zoom>
          </div>
        </div>
          <div>
            { /*         <Button
            onClick={() => {
              prop.openCard();
            }}
            variant="outlined"
            className="inviteButton"
          >
            Open Invitation
          </Button> */}
          </div>
        </div>
        </Zoom>)
      })}
      </div> : <div className="inviteCardSkelton">
        <CommonSkeleton animation="wave" variant="rounded" width={300} height={200} />
        <CommonSkeleton animation="wave" variant="rounded" width={300} height={200} />
      </div>}
    </div>
  );
}

export default OpenInvite;
