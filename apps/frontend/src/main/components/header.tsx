import { useContext } from "react";
import { AuthContext } from "context/auth.context";
import { toogleNav } from "modules/shared/helpers";

import "../styles/header.css";

const HeaderComponent = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="main-header bg-blue-700 h-12 pt-1 flex items-center">
      {user ? (
        <>
          <button
            type="button"
            className="block mr-auto mr-2 ml-2 h-8 md:invisible md:hidden"
            onClick={() => {
              toogleNav();
            }}
          >
            <div className="menu-icon"></div>
          </button>
        </>
      ) : (
        ""
      )}
    </header>
  );
};

export default HeaderComponent;
