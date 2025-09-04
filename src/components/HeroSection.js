import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.js";
import "./HeroSection.css";

export default function HeroSection({ handleScroll }) {
  return (
    <div className="hero-section-container">
      <div className="hero-section">
        <FontAwesomeIcon icon={faOtter} className="otter-icon" />
        <h1>Your Everyday Store, Right at the Bay!</h1>
        <p>
          Discover everyday essentials, curated with care — all in one place.
        </p>
        <Button
          onClick={handleScroll}
          children={"Shop Now"}
          icon={<FontAwesomeIcon icon={faArrowDown} />}
        />
      </div>
    </div>
  );
}
