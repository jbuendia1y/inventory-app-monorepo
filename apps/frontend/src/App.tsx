import { SideNavComponent } from "modules/shared/components/sidenav";
import { AuthContextProvider } from "context/auth.context";

function App() {
  return (
    <AuthContextProvider>
      <SideNavComponent />
    </AuthContextProvider>
  );
}

export default App;
