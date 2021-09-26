import "./navbar.scss";
import MenuIcon from "./icons/menu-icon.svg";
import HomeIcon from "./icons/home.svg";
import ConfigurationIcon from "./icons/settings-icon.svg";
import LoginIcon from "./icons/login-icon.svg";
import LogoutIcon from "./icons/logout-icon.svg";

import { Link } from "react-router-dom";
import { NavItemList } from "./components/NavItemList";
import { createRef } from "react";

const withoutAuth = () => {
  return (
    <>
      <NavItemList url="/login" image={LoginIcon}>
        Iniciar Sessión
      </NavItemList>
      <li className="nav__item">
        <Link to="/" className="nav__link">
          Register
        </Link>
      </li>
    </>
  );
};

const withAuth = () => {
  return (
    <>
      <NavItemList url="/settings" image={ConfigurationIcon}>
        Configuración
      </NavItemList>
      <NavItemList url="/logout" image={LogoutIcon}>
        Logout
      </NavItemList>
    </>
  );
};

export default function NavBar() {
  const isAuthenticated = false;
  const navList = createRef<HTMLUListElement>();

  return (
    <nav className="nav">
      <div className="nav-box">
        <button
          className="nav__icon"
          onClick={() => {
            navList.current?.classList.toggle(
              navList.current?.classList[0] + "-active"
            );
          }}
        >
          <img src={MenuIcon} alt="menu" />
          Menu
        </button>
        <ul className="nav__list" ref={navList}>
          <NavItemList url="/" image={HomeIcon}>
            Home
          </NavItemList>
          {isAuthenticated ? withAuth() : withoutAuth()}
        </ul>
      </div>
    </nav>
  );
}
