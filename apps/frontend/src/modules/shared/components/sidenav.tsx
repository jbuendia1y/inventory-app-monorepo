import { useContext } from "react";
import { NavComponent } from "modules/shared/components/nav";
import { Routes } from "modules/routes/routes";
import { HeaderComponent } from "modules/shared/components/header";

import { AuthContext } from "context/auth.context";

export const SideNavComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidenav__container bg-gray-100 h-screen md:flex">
      <aside
        id="main-aside"
        className={`sidenav transition-transform 
          ${user ? "visible block" : "invisible hidden"}
          fixed top-10 w-full h-screen md:sticky md:right-auto md:top-0 md:h-auto md:w-1/5 md:border-r-2 md:border-black md:border-opacity-50 md:transform md:translate-x-0
          z-20`}
      >
        <NavComponent />
      </aside>
      <div
        className={`sidenav__content h-full w-full ${
          typeof user !== "undefined" ? "md:w-4/5" : ""
        }`}
      >
        <HeaderComponent />
        <main className="overflow-x-auto">
          <Routes />
        </main>
      </div>
    </div>
  );
};
