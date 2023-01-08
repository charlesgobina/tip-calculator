import './Bill.css';
import { ReactComponent as Dollar } from '../../assets/images/icon-dollar.svg';

const Bill = () => (
  <div className="billWrapper">
    <span>Bill</span>
    <input className="billAmount" type="number" />
    <Dollar className="dollar" />
  </div>
);

export default Bill;
