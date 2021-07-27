import { NavLink } from "react-router-dom";
import '../../components/greeting'
import Greeting from "../../components/greeting";

const Header = () => {
  return (
    <header>
      <div><NavLink to="/">Home</NavLink></div>
      <ul>
        <li>
          <NavLink to="/ntrack">NTRACK</NavLink>
        </li>
        <li>
          <NavLink to="/ntask">NTASK</NavLink>
        </li>
        <li>
          <NavLink to="/tasklist">Tasklist</NavLink>
        </li>
        <li>
          <NavLink to="/tasksum">TaskSum</NavLink>
        </li>
        <li>
          <NavLink to="/insights">Insights</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <Greeting />
    </header>
  );
};

export default Header;
