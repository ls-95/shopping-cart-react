import {
  FirstColumnText,
  SecondColumnText,
  SecondColumnIcons,
} from "../Text/FooterText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer({ innerRef }) {
  return (
    <div ref={innerRef} className="footer" id="footer">
      <div className="footer-container">
        <div className="first-column-section">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faOtter} /> <span>Otter Bay Co.</span>
          </div>
          {FirstColumnText.map((first, index) => {
            return (
              <div key={index} className="contact-information">
                <h3>
                  {first.icon} <strong>{first.title}</strong>
                </h3>
                <p>{first.text}</p>
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
        <div className="payement-icon-small-screen">
          {SecondColumnIcons.map((icon, index) => {
            return <span key={index}>{icon}</span>;
          })}
        </div>
      </div>
      <hr />
      <div className="created-by">
        Built with React by Laetitia Saunders © 2025
      </div>
    </div>
  );
}
