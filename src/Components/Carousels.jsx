import Carousel from "react-spring-3d-carousel";
import React, { useState, useEffect, useMemo } from "react";
import { config } from "react-spring";
import Modal from "./Modal";
import Test2 from "./Test2";
import { v4 as uuidv4 } from "uuid";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { database } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Carousels() {
  const [goToSlide, setGoToSlide] = useState(null);
  const [isSliding, setIsSliding] = useState(true);
  const [text, setText] = useState([]);
  let wishes = [
    { name: "Amal", avatar: "A", wish: "good morning", color: "red" },
    { name: "Karun", avatar: "K", wish: "have a good day", color: "orange" },
    { name: "Karun", avatar: "K", wish: "have a good day", color: "orange" },
    { name: "Karun", avatar: "K", wish: "have a good day", color: "orange" },
    { name: "Karun", avatar: "K", wish: "have a good day", color: "orange" },
   
  ];

  const fetchData = async () => {
    try {
      const wishesCollection = collection(database, "wishes");
      const querySnapshot = await getDocs(wishesCollection);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setText(data); // ✅ Correct state update
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []); // ✅ Fetch only on mount

  // ✅ Memoized `slides` to prevent unnecessary re-renders
  const slides = useMemo(() => {
    return text.map((item, index) => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      return {
        key: uuidv4(),
        content: (
          <div onClick={() => handleSlideClick(index)}>
            <Test2
            wish={item }
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
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isSliding, slides.length]);

  const handleSlideClick = (slideNumber) => {
    setIsSliding((prevState) => !prevState);
    setGoToSlide(slideNumber);
  };

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
              border: "1.5px solid var(--color-base)",
            },
            "& .MuiAvatar-colorDefault": {
              backgroundColor: "var(--color-cherry)",
              color: "var(--color-base)",
            },
          }}
        >
          {text.map((item) => (
            <Avatar key={item.id} alt={item.name} src="/static/images/avatar/1.jpg" />
          ))}
        </AvatarGroup>
        <div>
          <Modal fetchData={fetchData} />
        </div>
      </div>
    </div>
  );
}
