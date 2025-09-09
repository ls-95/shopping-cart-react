import { useState, useEffect } from "react";
import {
  FirstColumnText,
  SecondColumnText,
  SecondColumnIcons,
} from "./Text/FooterText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer({ innerRef }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div ref={innerRef} className="footer" id="footer">
      <div className="footer-container">
        <div className="first-column-section">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faOtter} /> Otter Bay Co.
          </div>
          {FirstColumnText.map((first, index) => {
            return (
              <div key={index} className="contact-information">
                <p>
                  {first.icon} <strong>{first.title}</strong>
                  <br />
                  {first.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="second-column-section">
          <div className="icons">
            {SecondColumnIcons.map((icon, index) => {
              return <span key={index}>{icon}</span>;
            })}
          </div>
          <div className="delivery">
            {SecondColumnText.map((second, index) => {
              return (
                <div key={index} className="delivery-information">
                  <h3>
                    <span>{second.icon}</span> {second.title}
                  </h3>
                  <p>{second.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <p>Screen width: {width}px</p>
      </div>
    </div>
  );
}
