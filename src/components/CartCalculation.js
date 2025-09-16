export default function CartCalculation({ promo }) {
  return (
    <div>
      <div className="calculation">
        <p>
          <span>Shipping: </span>
          <span>TBD</span>
        </p>
        <p>
          <span>Discount: </span>
          <span>{promo ? "-50kr" : "TBD"}</span>
        </p>
        <p>
          <span>Tax: </span>
          <span>25%</span>
        </p>
        <p>
          <span>
            <strong>Estimated Total: </strong>
          </span>
          <span>0</span>
        </p>
      </div>
    </div>
  );
}
