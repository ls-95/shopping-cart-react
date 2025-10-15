import "./Delivery.css";

export default function Contact() {
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
          id="newsletter"
          name="newsletter"
          className="newsletter-checkbox"
        />
        <label htmlFor="newsletter">Email me with news and offers</label>
      </div>
    </div>
  );
}
