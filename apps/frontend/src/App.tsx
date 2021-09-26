import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Header />
      <div className="app-box">
        {/* <div className="app__aside">
          <div className="aside__user">
            <img src="https://picsum.photos/536/354" alt="profile of User" />
            <span>lorem</span>
          </div>
          <ul>
            <li>lorem /////</li>
          </ul>
          <ul>
            <li>lorem</li>
            <li>lorem /////</li>
          </ul>
        </div> */}
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
