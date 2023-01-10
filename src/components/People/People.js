import { ReactComponent as Person } from '../../assets/images/icon-person.svg';

const People = () => (
  <div className="billWrapper">
    <span>Number of people</span>
    <input className="billAmount" placeholder="0" type="number" />
    <Person className="dollar" />
  </div>
);

export default People;
