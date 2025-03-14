import Styles from "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <h2>{props.name}</h2>
      <p>{props.name}</p>
    </animated.div>
  );
}

export default Card;
