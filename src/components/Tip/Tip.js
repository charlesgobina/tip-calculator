import './Tip.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Tip = ({ setTip, bill }) => {
  const [customTip, setCustomTip] = useState('');

  const handleTipCalculate = (tip) => {
    setTip(
      (tip / 100) * bill,
    );
  };

  const handleCustomTipChange = (e) => {
    if (e.target.value === '') {
      setCustomTip('');
      setTip(0);
      return;
    }
    const inputValue = e.target.value;
    if (!Number.isNaN(inputValue) || inputValue === '') {
      setCustomTip(parseInt(e.target.value, 10));
    } else {
      setCustomTip('');
    }
    setTip(
      (customTip / 100) * bill,
    );
  };

  return (
    <div className="tipGreen">
      <span className="tipTitle">Select tip %</span>
      <div className="tipOptions">
        <div className="tipBtn">
          <button onClick={() => handleTipCalculate(5)} type="button">
            5%
          </button>
        </div>
        <div className="tipBtn">
          <button onClick={() => handleTipCalculate(10)} type="button">10%</button>
        </div>
        <div className="tipBtn">
          <button onClick={() => handleTipCalculate(15)} type="button">15%</button>
        </div>
        <div className="tipBtn">
          <button onClick={() => handleTipCalculate(25)} type="button">25%</button>
        </div>
        <div className="tipBtn">
          <button onClick={() => handleTipCalculate(50)} type="button">50%</button>
        </div>
        <div className="tipBtn">
          <input
            onChange={handleCustomTipChange}
            value={customTip}
            className="tipIn"
            type="text"
            placeholder="Custom"
            min={1}
          />
        </div>
      </div>
    </div>
  );
};

// prop validation
Tip.propTypes = {
  bill: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    // Add more types as needed
  ]),
  setTip: PropTypes.func.isRequired,
};

Tip.defaultProps = {
  bill: PropTypes.string.isRequired, // Provide a default value based on the expected type
};

export default Tip;
