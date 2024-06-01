import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import "../../Style/NavBar.css";

export default function NavBar() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <a className="logo" href="/">
          <img src="/Icons/logo.png" alt="" />
        </a>

        <div className="nav-links">
          <a href="#home">
            <FontAwesomeIcon icon={faHome} /> <p className="nav-text">Home</p>
          </a>
          <a href="#features">
            <FontAwesomeIcon icon={faSquarePlus} />{" "}
            <p className="nav-text">Chats</p>
          </a>
          <a href="#pricing">
            <FontAwesomeIcon icon={faComments} />{" "}
            <p className="nav-text">Messages</p>
          </a>
          <a href="#pricing">
            <FontAwesomeIcon icon={faUser} />{" "}
            <p className="nav-text">Profile</p>
          </a>
        </div>
      </div>
    </div>
  );
}
