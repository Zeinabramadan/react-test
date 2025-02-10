import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="header_nav_list">
          <li className="header_nav_list_item">
            <Link to="/">Todos</Link>
          </li>
          <li className="header_nav_list_item">
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
  </header>
  );
};

export default Header;