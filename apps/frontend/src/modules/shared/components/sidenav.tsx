import { useContext } from "react";
import { NavComponent } from "modules/shared/components/nav";
import { Routes } from "modules/routes/routes";
import { HeaderComponent } from "modules/shared/components/header";

import { navContext } from "context/toggleNav.context";
import { AuthContext } from "context/auth.context";

export const SideNavComponent = () => {
  const { navState } = useContext(navContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="sidenav__container bg-gray-100 h-screen md:flex">
      <div
        className={`sidenav transition-transform ${
          navState ? "transform translate-x-full" : ""
        } ${user ? "visible block" : "invisible hidden"}
           fixed right-full top-10 w-full h-screen md:sticky md:right-auto md:top-0 md:h-auto md:w-60 md:border-r-2 md:border-black md:border-opacity-50 md:transform md:translate-x-0`}
      >
        <NavComponent />
      </div>
      <div className="sidenav__content h-full md:w-full">
        <HeaderComponent />
        <Routes />
      </div>
    </div>
  );
};
