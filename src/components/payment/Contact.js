import "./Delivery.css";
import { useCart } from "../Cart/CartContext";

export default function Contact() {
  const { isChecked, setIsChecked } = useCart();
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="contact-section">
      <h3 className="section-heading">Contact</h3>
      <div className="input-wrapper">
        <input
          id="email"
          type="email"
          name="email"
          placeholder=" "
          required
          autoComplete="email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="newsletter">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id="newsletter"
          name="newsletter"
          className="newsletter-checkbox"
        />
        <label htmlFor="newsletter">
          Sign me up for the newsletter (what’s the worst that could happen?)
        </label>
      </div>
    </div>
  );
}
