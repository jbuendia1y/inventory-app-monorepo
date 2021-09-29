import "./navbar.scss";

import { NavItemList } from "./components/NavItemList";
import { createRef } from "react";
import {
  ConfigurationIcon,
  HomeIcon,
  LoginIcon,
  LogoutIcon,
  MenuIcon,
} from "../Icons";

const withoutAuth = () => {
  return (
    <>
      <NavItemList url="/login" image={LoginIcon}>
        Iniciar Sessión
      </NavItemList>
      <NavItemList url="/register">Register</NavItemList>
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
