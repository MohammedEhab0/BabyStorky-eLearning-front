import { MdNotificationsActive } from "react-icons/md";
import { GrLanguage } from "react-icons/gr"; // Import BiWorld icon
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <MdNotificationsActive className="nav__notification active" />
      <GrLanguage className="nav__language" />
    </nav>
  );
};

export default Header;
