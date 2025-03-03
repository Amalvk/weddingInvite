import "./styles.css";
import { useState } from "react";
import "malayalam-fonts";
import Invitation from "./Components/Invitation";
import OpenInvite from "./Components/OpenInvite";
import CountDown from "./Components/CountDown";
import Location from "./Components/Location";
import Wishes from "./Components/Wishes";
import Sidebar from "./Components/Sidebar";
import Carousels from "./Components/Carousels";
import Popper from "./Components/Popper";
import Event from "./Event";
import Footer from "./Components/Footer";

// import Navbar from "./Components/Navbar";
export default function App() {
  const [open, setOpen] = useState(false);
  const openCard = () => {
    setOpen((prevState) => !prevState);
    // setTimeout(() => setIsExploding(false), 2000);
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
          <Sidebar />
          {/* <Header /> */}
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {<Popper />}
            </div>
            <div className="countdown">
              <CountDown />
            </div>
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

          <div className="">
            <Carousels />
          </div>
          <div id="events">
            <Event />
          </div>

          <div id="invitation">
            <Invitation />
          </div>

          <div id="wishes">
            <Wishes />
          </div>

          <div id="location">
            <Location />
          </div>
          <div id="footer">
            <Footer />
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
