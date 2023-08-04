import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__name">CSS Press</h1>
      </Link>
      <div className="header__lines">
        <div className="header__lines--25"></div>
        <div className="header__lines--50"></div>
        <div className="header__lines--100"></div>
      </div>
    </header>
  );
}

export default Header;
