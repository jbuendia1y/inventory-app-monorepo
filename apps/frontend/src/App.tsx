import { SideNavComponent } from "modules/shared/components/sidenav";
import { AuthContextProvider } from "context/auth.context";
import { NavContextProvider } from "context/toggleNav.context";

function App() {
  return (
    <AuthContextProvider>
      <NavContextProvider>
        <SideNavComponent />
      </NavContextProvider>
    </AuthContextProvider>
  );
}

export default App;
