import { useContext } from "react";
import { AuthContext } from "context/auth.context";
import { NavComponent } from "./nav";

const AsideComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <aside
      id="main-aside"
      className={`sidenav transition-transform 
          ${user ? "visible block shadow-lg" : "invisible hidden"}
          fixed top-10 w-full h-screen md:sticky md:right-auto md:top-0 md:h-auto md:w-1/5 md:transform md:translate-x-0
          z-20`}
    >
      <NavComponent />
    </aside>
  );
};

export default AsideComponent;
