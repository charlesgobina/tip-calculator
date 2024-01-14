import React from 'react';
import './Bill.css';
import PropTypes from 'prop-types';

import { ReactComponent as Dollar } from '../../assets/images/icon-dollar.svg';

const Bill = ({ setBill, bill }) => {
  const handleBillChange = (e) => {
    const inputValue = e.target.value;
    if (!Number.isNaN(inputValue) || inputValue === '') {
      setBill(parseInt(e.target.value, 10));
    }
  };

  console.log(bill);

  return (
    <div className="billWrapper">
      <span>Bill</span>
      <input
        value={bill}
        onChange={handleBillChange}
        className="billAmount"
        placeholder="0"
        type="number"
      />
      <Dollar className="dollar" />
    </div>
  );
};

// prop validation
Bill.propTypes = {
  bill: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    // Add more types as needed
  ]),
  setBill: PropTypes.func.isRequired,
};

Bill.defaultProps = {
  bill: PropTypes.string.isRequired, // Provide a default value based on the expected type
};

export default Bill;
