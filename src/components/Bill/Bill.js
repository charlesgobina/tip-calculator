import React from 'react';
import './Bill.css';
import PropTypes from 'prop-types';

import { ReactComponent as Dollar } from '../../assets/images/icon-dollar.svg';

const Bill = ({ setBill, bill }) => {
  const handleBillChange = (e) => {
    setBill(parseInt(e.target.value, 10));
  };

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
  bill: PropTypes.number.isRequired,
  setBill: PropTypes.func.isRequired,
};

export default Bill;
