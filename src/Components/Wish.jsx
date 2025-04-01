import "./Wish.css";
import { Grid, Avatar, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FIREBASE_COLLECTIONS } from "../firebase/firebaseCollections";
import { updateDocument } from "../firebase/firebaseService";


function Wish(props) {
  const { wish } = props;

  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [show, setShown] = useState(false);
  useEffect(() => {
    setLike(wish.like);
  }, []);


  const addLike = async (e, id) => {
    e.stopPropagation();
    try {
      setLiked((prevLiked) => {
        const newLiked = !prevLiked;
  
        setLike((prevLike) => {
          const updatedLike = newLiked ? prevLike + 1 : prevLike - 1;
  
          updateDocument(FIREBASE_COLLECTIONS.WISHES, id, { like: updatedLike });
  
          return updatedLike; 
        });
  
        return newLiked;
      });
  
      console.log("Wish updated successfully!");
    } catch (error) {
      console.error("Error updating wish:", error.message);
    }
  };
  


  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
    borderRadius: "20px",
  });

  const displayDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const today = new Date().toLocaleDateString("en-US", options);
    //const wishDate = new Date(date).toLocaleDateString("en-US",options)

    if (today == date) return "Today";
    else return date;
  };
  return (
    <animated.div
      className="container"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="card">
        <div
          className="bg-img"
          style={{ background: "var(--color-warm)" }}
        ></div>

        <div className="profile">
          <div className="pic">
            <Avatar
              sx={{
                height: "50px",
                width: "50px",
                fontSize: "large",
                // background: props.randomColor,
                background: "var(--color-light)",
                alignSelf: "center",
              }}
              src={wish.image ? wish.image : null}
            >
              {wish.avatar}
            </Avatar>

          </div>
          <div className="pic1">
            <div className="title">{wish.name}</div>
            <div className="wishes">{wish.wish}</div>
            <div className="wishdetails">
              <div className="likedetails alignCenter">
                <div onClick={(e) => { addLike(e,wish.id) }} className='alignCenter' > {liked ? <FavoriteIcon sx={{ fontSize: "12px" }} /> : <FavoriteBorderIcon sx={{ fontSize: "12px" }} />}</div>
                <div>{like}</div>
              </div>
              <div>{displayDate(wish.time)}</div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Wish;
