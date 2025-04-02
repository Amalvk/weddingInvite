import Carousel from "react-spring-3d-carousel";
import React, { useState, useEffect, useMemo } from "react";
import { config } from "react-spring";
import Modal from "./Modal";
import Wish from "./Wish";
import { v4 as uuidv4 } from "uuid";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { FIREBASE_COLLECTIONS } from '../firebase/firebaseCollections'
import { fetchData } from "../firebase/firebaseService";
import CommonSkeleton from "../common/CommonSkeleton";
import {Zoom} from 'react-awesome-reveal';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousels() {
  const [goToSlide, setGoToSlide] = useState(null);
  const [isSliding, setIsSliding] = useState(true);
  const [text, setText] = useState([]);

  const loadData = async () => {
    fetchData(FIREBASE_COLLECTIONS.WISHES).then(setText).catch(console.error);
  };

  useEffect(() => {
    loadData();
    AOS.init({
      duration: 3000,
      // once: false,
    });
    AOS.refresh();
  }, []);

  // ✅ Memoized `slides` to prevent unnecessary re-renders
  const slides = useMemo(() => {
    return text.map((item, index) => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      return {
        key: uuidv4(),
        content: (
          <div onClick={() => handleSlideClick(index)}>
            <Wish
              wish={item}
              // name={item.name}
              // avatar={item.avatar}
              // message={item.wish}
              // color={item.color}

              randomColor={randomColor} // Pass the unique color to Test2
            />
          </div>
        ),
      };
    });
  }, [text]);

  // ✅ Auto-Sliding (Only when `text` is available)
  useEffect(() => {
    if (!isSliding || slides.length === 0) return;

    const interval = setInterval(() => {
      setGoToSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isSliding, slides.length]);

  const handleSlideClick = (slideNumber) => {
    setIsSliding((prevState) => !prevState);
    setGoToSlide(slideNumber);
  };

  return (
    <div>
      {text.length < 0 ? <Zoom><div data-aos="zoom-in"
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
      </div> </Zoom>: <div  style={{margin:'2rem',placeItems:'center'}}><CommonSkeleton animation="wave" variant="rounded" width={230} height={80} /></div>
      }
      <div className="displayBlock">
        <AvatarGroup
          max={5}
          className="justifyCenter"
          sx={{
            "& .MuiAvatar-root ": {
              width: 30,
              height: 30,
              fontSize: "70%",
              border: "1.5px solid var(--color-base)",
            },
            "& .MuiAvatar-colorDefault": {
              backgroundColor: "var(--color-cherry)",
              color: "var(--color-base)",
            },
          }}
        >
          {text.length > 0 ? (
            text.map((item) => (
              <Zoom><Avatar style={{margin:'-2px'}} key={item.id} alt={item.name} src="/static/images/avatar/1.jpg" /></Zoom>
            ))
          ) : (
            // Render Skeleton avatars as placeholders
            Array.from({ length: 5 }).map((_, index) => (
              <CommonSkeleton
                key={index}
                animation="wave"
                variant="circular"
                width={35}
                height={35}
                style={{margin:'-2px'}}
              />
            ))
          )}
        </AvatarGroup>
        <div>
          <Modal loadData={loadData} />
        </div>
      </div>
    </div>
  );
}
