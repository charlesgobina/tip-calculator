import './Tip.css';

const Tip = () => (
  <div className="tipGreen">
    <span className="tipTitle">Select tip %</span>
    <div className="tipOptions">
      <div className="tipBtn">
        <button type="button">5%</button>
      </div>
      <div className="tipBtn">
        <button type="button">10%</button>
      </div>
      <div className="tipBtn">
        <button type="button">15%</button>
      </div>
      <div className="tipBtn">
        <button type="button">25%</button>
      </div>
      <div className="tipBtn">
        <button type="button">50%</button>
      </div>
      <div className="tipBtn">
        <input className="tipIn" type="text" placeholder="Custom" />
      </div>
    </div>
  </div>
);

export default Tip;
