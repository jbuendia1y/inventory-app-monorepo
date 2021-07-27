import MainComponent from "main/main.page";
import { AuthContextProvider } from "context/auth.context";

function App() {
  return (
    <AuthContextProvider>
      <MainComponent />
    </AuthContextProvider>
  );
}

export default App;
