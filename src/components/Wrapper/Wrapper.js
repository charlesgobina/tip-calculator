import Bill from '../Bill/Bill';
import Tip from '../Tip/Tip';
import Display from '../Display/Display';
import People from '../People/People';
import './Wrapper.css';

const Wrapper = () => (
  <div className="lhsWrapper">
    <Bill />
    <Tip />
    <People />
    <Display />
  </div>
);

export default Wrapper;
