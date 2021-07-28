import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>Copyright 2021</li>
        <li><a href="https://github.com/TWetekamp/ntimer">GitHub</a></li>
        <li>
          <NavLink to="/credits">Credits</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
