import { createContext, useState } from "react";

export const navContext = createContext<{
  navState: boolean;
  setNavState: any;
}>({
  navState: false,
  setNavState: undefined,
});

export const NavContextProvider = (props: any) => {
  const [navState, setNavState] = useState(false);
  return (
    <navContext.Provider value={{ navState, setNavState }}>
      {props.children}
    </navContext.Provider>
  );
};
