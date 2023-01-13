import './Display.css';

const Display = () => (
  <div className="displayWrapper">
    <div className="totalAmt">
      <div>
        <span>Tip Amount</span>
        <span className="person">/ person</span>
      </div>
      <span>$0.00</span>
    </div>
    <div className="totalAmt">
      <div>
        <span>Total</span>
        <span className="person">/ person</span>
      </div>
      <span>$0.00</span>
    </div>
    <button type="button">RESET</button>
  </div>
);

export default Display;
