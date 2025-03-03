import {} from "@mui/material";
import "./Header.css";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header({ LocationRef }) {
  return (
    <div className="header-container">
      <div>
        <MenuIcon />
      </div>
      <div className="header-element">
        <div>
          <Link to="invitation" smooth={true}>
            Invitation
          </Link>
          <img scr="./Assets/Header.jpg" alt="Hu" />
        </div>
        <div>
          <Link to="location" smooth={true}>
            Location
          </Link>
        </div>
      </div>
    </div>
  );
}
