import "./Delivery.css";

export default function Delivery() {
  return (
    <div className="delivery-section">
      <div className="country">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          name="country"
          type="text"
          value="Fakeland"
          disabled
          autoComplete="country-name"
        />
      </div>

      <h3>Delivery</h3>

      <div className="name-section">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            required
            placeholder="First name"
            autoComplete="given-name"
          />
        </div>

        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            required
            placeholder="Last name"
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          required
          placeholder="Address"
          autoComplete="street-address"
        />
      </div>

      <div>
        <label htmlFor="more-info-address">Apartment, suite, etc.</label>
        <input
          id="more-info-address"
          name="more-info-address"
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          autoComplete="address-line2"
        />
      </div>

      <div className="post-code-city-section">
        <div>
          <label htmlFor="post-code">Postal Code</label>
          <input
            id="post-code"
            name="post-code"
            type="text"
            required
            placeholder="Postal Code"
            autoComplete="postal-code"
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="City"
            autoComplete="address-level2"
          />
        </div>
      </div>
    </div>
  );
}
