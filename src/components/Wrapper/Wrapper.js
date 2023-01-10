import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import People from '../People/People';
import './Wrapper.css';

const Wrapper = () => (
  <div className="lhsWrapper">
    <Bill />
    <Tip />
    <People />
  </div>
);

export default Wrapper;
