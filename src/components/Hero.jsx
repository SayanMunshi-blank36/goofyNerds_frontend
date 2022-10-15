import bgVid from "../assets/background.mp4";
import "../styles/Hero.css";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <video
        className="backVid"
        src={bgVid}
        autoPlay="true"
        loop="true"
        muted
      ></video>
      <div className="glitch_head">
        <h1
          className="heroLogo glitch_hero glitch layers"
          data-text="GOOFY NERDS"
        >
          <span className="heroLogo_left">Goofy </span>
          <span className="heroLogo_right">Nerds</span>
        </h1>
      </div>
      <ul className="icons">
        <li className="icon_items">
          <FaInstagram />
        </li>
        <li className="icon_items">
          <FaTwitter />
        </li>
        <li className="icon_items">
          <FaDiscord />
        </li>
      </ul>
      <div className="scroll">
        <p className="scroll_text">Scroll</p>
        <MdKeyboardArrowDown className="scroll_icons" />
      </div>
    </div>
  );
};

export default Hero;
