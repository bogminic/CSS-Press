import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__name">CSS Press</div>
      </Link>
      <div className="header__lines">
        <div className="header__lines--25"></div>
        <div className="header__lines--50"></div>
        <div className="header__lines--100"></div>
      </div>
      <div className="header__user"></div>
    </header>
  );
}

export default Header;
