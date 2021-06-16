import { useContext, useState } from "react";
import { navContext } from "context/toggleNav.context";
import "../styles/header.css";

export const HeaderComponent = () => {
  const { navState, setNavState } = useContext(navContext);
  const [addMenuState, toggleAddMenu] = useState(false);

  return (
    <header className="bg-blue-700 h-10 pt-1 flex items-center">
      <button
        type="button"
        className="block mr-auto mr-2 ml-2 h-8 md:invisible md:hidden"
        onClick={() => {
          setNavState(!navState);
        }}
      >
        <div className="menu-icon"></div>
      </button>
      <div className="relative md:rl-auto">
        <button
          type="button"
          className="mr-2 add-icon"
          onClick={() => {
            toggleAddMenu(!addMenuState);
          }}
        ></button>
        {addMenuState ? (
          <div className="absolute top-100% right-0 mx-auto">
            <ul>
              <li>
                <span>Product</span>
              </li>
              <li>
                <span>Purchase</span>
              </li>
              <li>
                <span>Sale</span>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
