import "./header.scss";
import logo from "../../logo.svg";
import NavBar from "../navbar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-box">
        <img src={logo} alt="logo de reactJS" className="header__image" />
        <NavBar />
      </div>
    </header>
  );
}
