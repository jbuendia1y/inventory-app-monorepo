import { useContext } from "react";

import { AuthContext } from "context/auth.context";
import Routes from "./routes";

import AsideComponent from "./components/aside";
import HeaderComponent from "./components/header";

const MainComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidenav__container bg-gray-100 h-screen md:flex md:overflow-hidden">
      <AsideComponent />
      <div
        className={`sidenav__content h-full w-full ${
          typeof user !== "undefined" ? "md:w-4/5" : ""
        }`}
      >
        <HeaderComponent />
        <main className="relative h-full overflow-x-auto overflow-y-auto">
          <Routes />
        </main>
      </div>
    </div>
  );
};

export default MainComponent;
