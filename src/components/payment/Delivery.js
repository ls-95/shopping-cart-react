import "./Delivery.css";

export default function Delivery() {
  return (
    <div className="delivery-section">
      <h3 className="section-heading">Delivery</h3>
      <div className="input-wrapper">
        <select id="country" name="country" defaultValue="fakeland">
          <option value="fakeland">Fakeland</option>
        </select>
        <label htmlFor="country">Country/Region</label>
      </div>

      <div className="name-row">
        <div className="input-wrapper">
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            placeholder=" "
            autoComplete="given-name"
          />
          <label htmlFor="first-name">First name</label>
        </div>

        <div className="input-wrapper">
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            placeholder=" "
            autoComplete="family-name"
          />
          <label htmlFor="last-name">Last name</label>
        </div>
      </div>

      <div className="input-wrapper">
        <input
          id="company"
          name="company"
          type="text"
          placeholder=" "
          autoComplete="organization"
        />
        <label htmlFor="company">Company (optional)</label>
      </div>

      <div className="input-wrapper">
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder=" "
          autoComplete="street-address"
        />
        <label htmlFor="address">Address</label>
      </div>

      <div className="input-wrapper">
        <input
          id="apartment"
          name="apartment"
          type="text"
          placeholder=" "
          autoComplete="address-line2"
        />
        <label htmlFor="apartment">Apartment, suite, etc. (optional)</label>
      </div>

      <div className="postal-city-row">
        <div className="input-wrapper">
          <input
            id="postal-code"
            name="postal-code"
            type="text"
            required
            placeholder=" "
            autoComplete="postal-code"
          />
          <label htmlFor="postal-code">Postal code</label>
        </div>

        <div className="input-wrapper">
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder=" "
            autoComplete="address-level2"
          />
          <label htmlFor="city">City</label>
        </div>
      </div>

      <div className="input-wrapper">
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder=" "
          autoComplete="tel"
        />
        <label htmlFor="phone">Phone</label>
      </div>
    </div>
  );
}
