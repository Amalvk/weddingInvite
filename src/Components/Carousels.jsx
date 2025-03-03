import Carousel from "react-spring-3d-carousel";
import React, { useState, useEffect } from "react";
import { config } from "react-spring";
import Modal from "./Modal";
import Test2 from "./Test2";
import { v4 as uuidv4 } from "uuid";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function Carousels() {
  let wishes = [
    { name: "Amal", avatar: "A", wish: "good morning", color: "red" },
    { name: "Karun", avatar: "K", wish: "have a good day", color: "orange" },
    { name: "Navaneeth", avatar: "N", wish: "How are you", color: "cyan" },
    { name: "Navaneeth", avatar: "N", wish: "How are you", color: "yellow" },
    {
      name: "Navaneeth",
      avatar: "N",
      wish: "How are you How are you How are you How are you How are you How are you How are you How are you How are you ",
      color: "green",
    },
  ];
  const [goToSlide, setGoToSlide] = useState(null);
  const [isSliding, setIsSliding] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let interval;
    if (isSliding === true) {
      interval = setInterval(() => {
        setGoToSlide((prevIndex) => (prevIndex + 1) % slides.length);
      }, 2000);
      return () => clearInterval(interval); // Cleanup the interval on unmount
    }
  }, [isSliding]);

  const handleSlideClick = (slideNumber) => {
    if (goToSlide == slideNumber) {
      setIsSliding((prevstate) => !prevstate);
    } else {
      setIsSliding((prevstate) => !prevstate);
      setGoToSlide(slideNumber);
    }
  };

  const onMouseHover = (value) => {
    setIsSliding(value);
  };
  const generateSlides = () => {
    return wishes.map((item, index) => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      return {
        key: uuidv4(),
        content: (
          <div onClick={() => handleSlideClick(index)}>
            <Test2
              name={item.name}
              avatar={item.avatar}
              message={item.wish}
              color={item.color}
              randomColor={randomColor} // Pass the unique color to Test2
            />
          </div>
        ),
      };
    });
  };

  const slides = generateSlides();

  return (
    <div>
      <div
        style={{
          width: "30%",
          paddingBlock: "5.5rem 5rem",
          margin: "0 auto",
          offset: 2,
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={4}
          goToSlideDelay={2000}
          animationConfig={config.gentle}
        />
      </div>
      <div className="displayBlock">
        <AvatarGroup
          max={4}
          className="justifyCenter"
          sx={{
            "& .MuiAvatar-root ": {
              width: 26,
              height: 26,
              fontSize: "80%",
              border: "1.5px solid var( --color-base)",
            },
            "& .MuiAvatar-colorDefault": {
              backgroundColor: "var(--color-cherry)",
              color: "var( --color-base)",
            },
          }}
        >
          {wishes.map((item) => {
            return <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />;
          })}
        </AvatarGroup>
        <div>
          <Modal />
        </div>
      </div>
    </div>
  );
}
