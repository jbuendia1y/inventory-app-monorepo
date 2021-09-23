import { Link } from "react-router-dom";

export default function Navegation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="" className="nav__link">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
