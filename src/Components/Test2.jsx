import "./Test2.css";
import { Grid, Avatar, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

function Test2(props) {

  const {wish} =props
  console.log(wish);
  
  const [show, setShown] = useState(false);
  let img = false;
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
    borderRadius: "20px",
  });
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

        {/* <div className="profile-info"> */}
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
              src={img ? "https://picsum.photos/seed/picsum/200/300" : null}
            >
              {wish.avatar}
            </Avatar>

            {/* <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Victor"
              className="img"
            /> */}
          </div>
          <div className="pic1">
            <div className="title">{wish.name}</div>
            <div className="wishes">{wish.wish}</div>
             <div className="wishes" >{new Date(wish.time).toDateString()}</div> 
          </div>
          {/* <div className="name">
              <span>Victor Crest</span> 26
              </div>
            <div className="location">London</div> */}
        </div>
        {/* </div> */}
      </div>
    </animated.div>
  );
}

export default Test2;
