import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
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
        {/* <li>
          <NavLink to="/insights">Insights</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li> */}
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
