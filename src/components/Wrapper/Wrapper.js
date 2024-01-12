import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import Display from '../Display/Display';
import People from '../People/People';
import './Wrapper.css';

const Wrapper = () => {
  const [bill, setBill] = useState(0);

  // the value of bill

  // clear bill input on reset button click
  const handleBillReset = () => {
    setBill(0);
  };
  return (
    <div className="lhsWrapper">
      <Bill setBill={setBill} bill={bill} />
      <Tip />
      <People />
      <Display bill={bill} handleBillReset={handleBillReset} />
    </div>
  );
};

// prop validation
// Wrapper.propTypes = {
//   bill: PropTypes.number.isRequired,
//   handleReset: PropTypes.func.isRequired,
// };

export default Wrapper;
