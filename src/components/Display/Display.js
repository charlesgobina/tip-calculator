import PropTypes from 'prop-types';
import ResetButton from '../ResetButton/resetButton';
import './Display.css';

const Display = ({ bill, handleBillReset }) => (
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
      <span>{`$ ${bill}`}</span>
    </div>
    <ResetButton handleBillReset={handleBillReset} />
  </div>
);

// prop validation
Display.propTypes = {
  bill: PropTypes.number.isRequired,
  handleBillReset: PropTypes.func.isRequired,
};

export default Display;
