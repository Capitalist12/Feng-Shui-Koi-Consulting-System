import "../../styles/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://png.pngtree.com/png-clipart/20191119/ourmid/pngtree-red-and-black-koi-fish-png-image_1996093.jpg"
          alt=""
          width={200}
        ></img>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
