import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ handleBillReset }) => (
  <button type="button" onClick={handleBillReset} className="reset-button">
    RESET
  </button>
);

// prop validation
ResetButton.propTypes = {
  handleBillReset: PropTypes.func.isRequired,
};

export default ResetButton;
