import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";
import Sidenav from "./components/sidenav/sidenav";

function App() {
  return (
    <>
      <Header />
      <div className="app-box">
        <Sidenav />
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
