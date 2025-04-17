import "./styles.css";
import { useState } from "react";
import "malayalam-fonts";
import Invitation from "./Components/Invitation";
import OpenInvite from "./Components/OpenInvite";
import CountDown from "./Components/CountDown";
import Location from "./Components/Location";
import Header from "./Components/Header";
import Carousels from "./Components/Carousels";
import Popper from "./Components/Popper";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import BackgroundImage from "./Components/BackgroundImage";
import Ghibili from './Assets/ghibiliAA.jpg';

// import Navbar from "./Components/Navbar";
export default function App() {
  const [open, setOpen] = useState(false);
  const [weddingInfo, setWeddingInfo] = useState();
  const openCard = (info) => {
    setOpen((prevState) => !prevState);
    // setTimeout(() => setIsExploding(false), 2000);
    setWeddingInfo(info)
  };
  return (
    <div className="App">
      {open ? (
        <div
          style={{
            position: "relative",
            left: "0rem",
            textAlign: "left",
            top: "50%",
            zIndex: "1",
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            
            <Header {...weddingInfo} />
            {/* <div style={{ display: "flex", justifyContent: "center", zIndex: 1, position: 'absolute' }}>
              {<Popper />}
            </div> */}
            <div className="countdown">
              <CountDown date={weddingInfo.date} />
            </div>
              
            <div style={{ position: "absolute", top: "18rem" }}>
              <img
                style={{ width: 50, height: 50, borderRadius: 0 }}
                src={"https://picsum.photos/seed/picsum/200/300"}
                alt="No Img"
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: "0rem",
                textAlign: "right",
                top: "18rem",
                zIndex: "1",
              }}
            >
              <img
                style={{ width: 50, height: 50, borderRadius: 0 }}
                src={"https://picsum.photos/seed/picsum/200/300"}
                alt="No Img"
              />
            </div>
            <div id="carousels">
              <Carousels />
            </div>
            <div id="events">
              <Event />
            </div>

            <div id="invitation">
              <Invitation {...weddingInfo} />
            </div>

            <div >
              <BackgroundImage image={Ghibili} />
            </div>

            <div id="location">
              <Location />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <OpenInvite openCard={openCard} />
        </div>
      )}
    </div>
  );
}
