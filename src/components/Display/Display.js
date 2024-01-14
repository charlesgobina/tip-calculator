import PropTypes from 'prop-types';
import ResetButton from '../ResetButton/resetButton';
import './Display.css';

const Display = ({ bill, handleBillReset, tip }) => (
  <div className="displayWrapper">
    <div className="totalAmt">
      <div>
        <span>Tip Amount</span>
        <span className="person">/ person</span>
      </div>
      <span>{`$ ${bill}`}</span>
    </div>
    <div className="totalAmt">
      <div>
        <span>Total</span>
        <span className="person">/ person</span>
      </div>
      <span>{`$ ${tip}`}</span>
    </div>
    <ResetButton handleBillReset={handleBillReset} />
  </div>
);

// prop validation
Display.propTypes = {
  bill: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    // Add more types as needed
  ]),
  handleBillReset: PropTypes.func.isRequired,
  tip: PropTypes.number.isRequired,
};

Display.defaultProps = {
  bill: PropTypes.string.isRequired, // Provide a default value based on the expected type
};

export default Display;
